import wixData from 'wix-data';
import { updateMemberProfileImage } from 'abmp-npm/backend/tasks/tasks-helpers-methods';
const getAllItems = async (querySearchResult) => {
  let oldResults = querySearchResult;
  console.log(`found items: ${oldResults.items.length}`);
  const allItems = oldResults.items;
  while (oldResults.hasNext()) {
    oldResults = await oldResults.next();
    allItems.push(...oldResults.items);
  }
  console.log(`all items count : ${allItems.length}`);
  return allItems;
};
const searchAllItems = async (searchQuery) => {
  console.log('start search');
  const searchResults = await searchQuery.run();
  return getAllItems(searchResults);
};
const chunkArray = (array, chunkSize = 50) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const queryAllItems = async (query) => {
  console.log('start query');
  const queryResults = await query.find();
  return getAllItems(queryResults);
};
async function bulkSaveMembers(
  memberDataList,
  collectionName = 'MembersDataLatest'
) {
  if (!Array.isArray(memberDataList) || memberDataList.length === 0) {
    throw new Error('Invalid member data list provided for bulk save');
  }

  try {
    // bulkSave all with batches of 1000 items as this is the Velo limit for bulkSave
    const batches = chunkArray(memberDataList, 1000);
    return await Promise.all(
      batches.map((batch) => wixData.bulkSave(collectionName, batch))
    );
  } catch (error) {
    console.error('Error bulk saving members:', error);
    throw new Error(`Bulk save failed: ${error.message}`);
  }
}
export async function copyContactIdToWixMemberId() {
  const query = wixData.query('MembersDataLatest').isNotEmpty('contactId');
  const members = await queryAllItems(query);
  console.log(`found members: ${members.length}`);
  const updatedMembers = members.map((member) => ({
    ...member,
    wixMemberId: member.contactId,
  }));
  console.log(`updated members: ${updatedMembers.length}`);
  return await bulkSaveMembers(updatedMembers, 'MembersDataLatest');
}

export async function createContactsFromMembers() {}

export async function getMembersWithInvalidProfileImages() {
  try {
    const BATCH_SIZE = 1000;

    // First, get total count
    const countResult = await wixData
      .query('MembersDataLatest')
      .isNotEmpty('profileImage')
      .limit(1)
      .find();

    const totalCount = countResult.totalCount;
    console.log(`totalCount: ${totalCount}`);

    // Calculate number of batches needed
    const numberOfBatches = Math.ceil(totalCount / BATCH_SIZE);
    console.log(`numberOfBatches: ${numberOfBatches}`);

    // Create array of query promises with skip and limit
    const queryPromises = Array.from(
      { length: numberOfBatches },
      (_, index) => {
        const skip = index * BATCH_SIZE;
        return wixData
          .query('MembersDataLatest')
          .isNotEmpty('profileImage')
          .skip(skip)
          .limit(BATCH_SIZE)
          .find();
      }
    );

    // Execute all queries in parallel
    const results = await Promise.all(queryPromises);

    // Combine all items from all batches
    const allItems = results.flatMap((result) => result.items);
    console.log(`allItems: ${allItems.length}`);
    // Filter for external images (not starting with 'wix:')
    const membersWithExternalImages = allItems.filter(
      (member) =>
        member.profileImage &&
        !member.profileImage.startsWith('wix:') &&
        !member.profileImage.startsWith('https://static.wixstatic.com')
    );
    console.log(`allItems: ${allItems.length}`);
    console.log(
      'allItems: ',
      allItems.map((member) => ({
        profileImage: member.profileImage,
        fullName: member.fullName,
        url: member.url,
        memberId: member._id,
      }))
    );
    console.log(
      `membersWithExternalImages: ${membersWithExternalImages.length}`
    );
    return membersWithExternalImages.map((member) => ({
      profileImage: member.profileImage,
      fullName: member.fullName,
      url: member.url,
      wixMemberCMSId: member._id,
      memberId: member.memberId,
    }));
  } catch (error) {
    console.error(`Error in getMembersWithProfileImages ${error.message}`);
    throw error;
  }
}

export async function updateMemberProfileImageInWix(memberId) {
  return await updateMemberProfileImage(memberId);
}

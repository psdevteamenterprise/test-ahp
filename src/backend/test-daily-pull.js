import {bulkProcessAndSaveMemberData} from 'abmp-npm/backend/daily-pull/bulk-process-methods';

export async function testDailyPull() {
  const memberDataList = await bulkProcessAndSaveMemberData({
    memberDataList: [{
        "migrationData": {
          "opted_out": true,
          "show_member_since": true,
          "website": "",
          "addressinfo": {
            "9165dd6d-cb42-4fbb-b685-3c2d6f96ef78": "all",
            "988a6b23-56e9-4ee5-ac8e-9954590324ea": "citystate"
          },
          "interests": "Massage Therapy, Swedish Massage, Stress Relief, Spa Massage, Lymphatic Massage, Lymphatic Massage",
          "logo_url": "",
          "detailtext": "",
          "schedule_code": "Shearpampering.booksy.com",
          "show_phone": "(716)400-1633"
        },
        "memberid": 11111112,
        "firstname": "Wadi",
        "lastname": "ahp2",
        "email": "niwicis213@jparksky.com",
        "phones": [
          "(716)400-1633"
        ],
        "url": "testahp-2",
        "action": "new",
        "licenses": [
          {
            "state": "NY",
            "license": "NY #029821",
            "exempt": false
          },
          {
            "state": "NY",
            "license": "NY #22SM1445219",
            "exempt": false
          },
          {
            "state": "NY",
            "license": "NY #AEE-15-04228",
            "exempt": false
          }
        ],
        "addresses": [
          {
            "key": "988a6b23-56e9-4ee5-ac8e-9954590324ea",
            "line1": "46 Randolph Ave # 46",
            "line2": "",
            "city": "Buffalo",
            "state": "NY",
            "postalcode": "14211-2608",
            "latitude": 42.908162,
            "longitude": -78.798875
          },
          {
            "key": "9165dd6d-cb42-4fbb-b685-3c2d6f96ef78",
            "line1": "700 Main ST FL 1",
            "line2": "",
            "city": "Buffalo",
            "state": "NY",
            "postalcode": "14202-1924",
            "latitude": 42.892981,
            "longitude": -78.872002
          }
        ],
        "memberships": [
          {
            "association": "ABMP",
            "membertype": "Certified",
            "expiration": "2025-11-18T00:00:00",
            "membersince": "2016-10-14T00:00:00"
          },
          {
            "association": "AHP",
            "membertype": "Hair Professional",
            "expiration": "2025-11-18T00:00:00",
            "membersince": "2016-10-14T00:00:00"
          },
          {
            "association": "ANP",
            "membertype": "Professional",
            "expiration": "2025-11-18T00:00:00",
            "membersince": "2016-11-03T00:00:00"
          },
          {
            "association": "ASCP",
            "membertype": "Professional",
            "expiration": "2025-11-18T00:00:00",
            "membersince": "2016-10-14T00:00:00"
          }
        ]
      },],
    currentPageNumber: 1,
    addInterests: false,
  });
  console.log(memberDataList);
}
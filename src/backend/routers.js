import {
  ok,
  notFound,
  WixRouterSitemapEntry,
  redirect,
  sendStatus,
} from 'wix-router';
import { createRoutersHandlers } from 'abmp-npm/backend';

// These dependencies needs to be injected as they do not have an SDK equivalent for now
const { profileRouter, profileSiteMap } = createRoutersHandlers({
  redirect,
  ok,
  notFound,
  sendStatus,
  WixRouterSitemapEntry,
});

export async function profile_Router(request) {
  return await profileRouter(request);
}

export async function profile_SiteMap(sitemapRequest) {
  return await profileSiteMap(sitemapRequest);
}

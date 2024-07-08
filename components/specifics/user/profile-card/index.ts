export {default as UserCard} from "./UserCard.vue";
export {default as UserCardSection} from "./UserCardSection.vue";
export {default as UserCardSectionBadge} from "./UserCardSectionBadge.vue";
export {default as UserCardSectionContent} from "./UserCardSectionContent.vue";
export {default as UserCardHeader} from "./UserCardHeader.vue";
export {default as UserCardTitle} from "./UserCardTitle.vue";
export {default as UserCardDescription} from "./UserCardDescription.vue";
export {default as UserCardSocialLink} from "./UserCardSocialLink.vue";

import {Instagram, Facebook, X} from "@iconoir/vue";

export type SocialType = "instagram" | "facebook" | "twitter";
export const SocialTypeRepresentation = {
  instagram: {
    link: "https://www.instagram.com",
    icon: Instagram,
  },
  facebook: {
    link: "https://www.facebook.com",
    icon: Facebook,
  },
  twitter: {
    link: "https://www.twitter.com",
    icon: X,
  },
};

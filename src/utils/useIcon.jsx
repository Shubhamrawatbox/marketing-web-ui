import { useMemo } from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconHome,
  IconMessage,
  IconPhoneCall,
} from "@tabler/icons-react";

export function useIcon(icon) {
  return useMemo(() => {
    switch (icon) {
      case "IconHome":
        return (
          <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        );
      case "IconMessage":
        return (
          <IconMessage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        );
      case "IconPhoneCall":
        return (
          <IconPhoneCall className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        );
      case "IconBrandLinkedin":
        return <IconBrandLinkedin />;
      case "IconBrandFacebook":
        return <IconBrandFacebook />;
      case "IconBrandInstagram":
        return <IconBrandInstagram />;

      default:
        return null;
    }
  }, [icon]);
}

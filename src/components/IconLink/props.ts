import { IconType } from "react-icons";

export type IconLinkProps = {
  download?: boolean | string;
  href: string;
  icon: IconType;
  label: string;
};

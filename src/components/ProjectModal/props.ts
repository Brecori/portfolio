import type { ProjectContent } from "@/slugs/props";

export type ProjectModalProps = {
  onClose: () => void;
  portalTarget: HTMLElement;
  project: ProjectContent;
};

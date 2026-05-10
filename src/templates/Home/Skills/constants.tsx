import {
  SiAngular,
  SiFigma,
  SiGsap,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";

export type SkillType =
  | "mobile"
  | "frontend"
  | "styles"
  | "animation"
  | "design";

export const skillTypes: SkillType[] = [
  "mobile",
  "frontend",
  "styles",
  "animation",
  "design",
];

export const skills = [
  {
    key: "react",
    type: "frontend",
    icon: SiReact,
  },
  {
    key: "sass",
    type: "styles",
    icon: SiSass,
  },

  {
    key: "reactNative",
    type: "mobile",
    icon: SiReact,
  },
  {
    key: "next",
    type: "frontend",
    icon: SiNextdotjs,
  },

  {
    key: "styledComponents",
    type: "styles",
    icon: SiStyledcomponents,
  },
  {
    key: "angular",
    type: "frontend",
    icon: SiAngular,
  },
  {
    key: "figma",
    type: "design",
    icon: SiFigma,
  },
  {
    key: "typescript",
    type: "frontend",
    icon: SiTypescript,
  },
  {
    key: "gsap",
    type: "animation",
    icon: SiGsap,
  },
] as const satisfies {
  key: string;
  type: SkillType;
  icon: IconType;
}[];

export type Skill = (typeof skills)[number];

export const orbitSkills = {
  inner: skills.filter((_, index) => index % 2 !== 0),
  outer: skills.filter((_, index) => index % 2 === 0),
};

export const skillIndexByKey = skills.reduce<Record<string, number>>(
  (accumulator, skill, index) => {
    accumulator[skill.key] = index;
    return accumulator;
  },
  {},
);

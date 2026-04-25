import {
  Code2Icon,
  PaletteIcon,
  SmartphoneIcon,
  SparklesIcon,
} from "lucide-react";

const C = {
  featuredStack: {
    icon: Code2Icon,
    number: "01",
    stackKeys: [
      "cards.frontend.stacks.react",
      "cards.frontend.stacks.next",
      "cards.frontend.stacks.angular",
      "cards.frontend.stacks.styledComponents",
      "cards.frontend.stacks.sass",
      "cards.frontend.stacks.typescript",
    ],
    titleKey: "cards.frontend.title",
  },
  secondaryStacks: [
    {
      number: "02",
      titleKey: "cards.animations.title",
      stackKeys: ["cards.animations.stacks.gsap"],
      icon: SparklesIcon,
    },
    {
      number: "03",
      titleKey: "cards.design.title",
      stackKeys: ["cards.design.stacks.figma"],
      icon: PaletteIcon,
    },
    {
      number: "04",
      titleKey: "cards.mobile.title",
      stackKeys: ["cards.mobile.stacks.reactNative"],
      icon: SmartphoneIcon,
    },
  ],
};

export default C;

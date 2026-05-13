export const viewportsBase = {
  mobile: {
    width: 600,
  },
  mobileVerticalHorizontal: {
    width: 600,
  },
  mobileHorizontal: {
    width: 600,
  },
  tablet: {
    width: 768,
  },
  ipadVertical: {
    width: 1024,
  },
  desktop1024: {
    width: 1024,
  },
  desktop1280: {
    width: 1280,
  },
  desktop1440: {
    width: 1440,
    height: 900,
  },
  desktop1920: {
    width: 1920,
    height: 1080,
  },
  desktop2560: {
    width: 2560,
    height: 1440,
  },
};

export const aspectRatioBase = {
  ultrawide: "18/9",
};

export type ViewportBaseProps = keyof typeof viewportsBase;
export type AspectRatioProps = keyof typeof aspectRatioBase;

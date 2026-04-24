import { ViewportBaseProps } from '@/constants/viewport-base';
import { ReactNode } from 'react';

export interface ResponsiveElementProps {
  breakpoints?: { [view in ViewportBaseProps]?: ReactNode | string };
  content: ReactNode | string;
}

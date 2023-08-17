/// <reference types="nativewind/types" />

declare module "*.png";

// allows to use svg file in the development
declare module '*.svg' {
  import {SvgProps} from 'react-native-svg';
  const content: React.StatelessComponent<SvgProps>;
  export default content;
}

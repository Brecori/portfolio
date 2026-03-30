import { FC } from "react";
import * as S from "./styles";

export const Navbar: FC = () => {
  return <S.NavbarContainer $hasScrolled={true}></S.NavbarContainer>;
};

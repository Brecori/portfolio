import { FC } from "react";
import * as S from "./styles";

export const Header: FC = () => {
  return (
    <S.HeaderContainer>
      <S.LeftGroup>
        <S.Title>
          Lorem, ipsum. <br /> <span>Lorem.</span>
        </S.Title>
        <S.Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
          doloremque quia dolore ipsa quo, voluptates veniam expedita aut rerum
          vero minima nesciunt suscipit sit modi natus quaerat praesentium,
          nobis repudiandae?
        </S.Description>

        <S.ButtonsContainer>
          <S.Button href="#">Entre em contato</S.Button>
          <S.PdfButton>Currículo</S.PdfButton>
        </S.ButtonsContainer>
      </S.LeftGroup>
    </S.HeaderContainer>
  );
};

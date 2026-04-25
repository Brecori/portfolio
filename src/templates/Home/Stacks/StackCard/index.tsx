import { FC } from "react";
import { LucideIcon } from "lucide-react";
import * as S from "./styles";

type StackCardProps = {
  featured?: boolean;
  icon: LucideIcon;
  number: string;
  stacks: string[];
  title: string;
};

export const StackCard: FC<StackCardProps> = ({
  featured = false,
  icon: Icon,
  number,
  stacks,
  title,
}) => {
  return (
    <S.Card $featured={featured}>
      <S.CardHeader>
        <S.CardNumber>{number}</S.CardNumber>
        <Icon />
      </S.CardHeader>

      <S.CardContent $featured={featured}>
        <S.CardTitle>{title}</S.CardTitle>
        <S.StackList $featured={featured}>
          {stacks.map((stack) => (
            <S.StackItem key={stack}>{stack}</S.StackItem>
          ))}
        </S.StackList>
      </S.CardContent>
    </S.Card>
  );
};

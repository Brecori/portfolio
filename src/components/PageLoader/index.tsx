import C from "./constants";
import { PageLoaderProps } from "./props";
import * as S from "./styles";

const clampProgress = (progress?: number) => {
  if (typeof progress !== "number") {
    return 0;
  }

  return Math.max(0, Math.min(100, Math.round(progress)));
};

export const PageLoader = ({
  fixed = true,
  progress,
}: PageLoaderProps) => {
  const currentProgress = clampProgress(progress);

  return (
    <S.Overlay $fixed={fixed} aria-live="polite" aria-busy="true">
      <S.Content>
        <S.ProgressHeader>
          <S.Status>{C.statusLabel}</S.Status>
          <S.Percentage>{currentProgress}%</S.Percentage>
        </S.ProgressHeader>

        <S.ProgressTrack
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={currentProgress}
        >
          <S.ProgressFill $progress={currentProgress} />
        </S.ProgressTrack>
      </S.Content>
    </S.Overlay>
  );
};

export interface PageLoaderProps {
  fixed?: boolean;
}

export interface PageLoaderHandle {
  setProgress: (progress: number) => void;
}

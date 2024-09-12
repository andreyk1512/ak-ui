export type FileProps = {
  name?: string,
  placeholder?: string,
  value?: File | null;
  onChange?: (file: File | null) => void;
};

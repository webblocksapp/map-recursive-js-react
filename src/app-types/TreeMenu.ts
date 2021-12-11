export type TreeMenu = {
  id: number;
  text: string;
  open: boolean;
  children?: TreeMenu[];
};

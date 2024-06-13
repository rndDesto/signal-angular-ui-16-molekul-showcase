export type TableItem = {
    header: string;
    description: string;
    values: string[];
    type: string;
    handleClick?: (n: string, i: number) => void;
  };
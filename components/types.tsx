export type CommonProps = {
  className?: string;
};

export type paperStoreState = {
  paper: React.MutableRefObject<null> | null;
  initializePaper: (state: React.MutableRefObject<null>) => void;
};

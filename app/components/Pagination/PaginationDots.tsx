interface PaginationDotsProps {
  visible: boolean;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PaginationDots = ({ visible, setCurrentPage }: PaginationDotsProps) => {
  return visible ? (
    <div>
      <span className="mx-1 font-bold">.</span>
      <span className="mx-1 font-bold text-indigo-600">.</span>
      <span className="mx-1 font-bold">.</span>
    </div>
  ) : null;
};
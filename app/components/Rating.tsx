interface RatingProps {
  rating: number;
};

export const Rating = ({ rating }: RatingProps) => (
  <div className="p-4 font-bold">{`Rating: ${rating}`}</div>
);
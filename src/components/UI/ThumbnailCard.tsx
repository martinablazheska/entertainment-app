import classes from "./ThumbnailCard.module.scss";

const ThumbnailCard: React.FC<{ name: string }> = ({ name }) => {
  return <div>{name}</div>;
};

export default ThumbnailCard;

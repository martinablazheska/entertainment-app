import classes from "./ContentList.module.scss";

const ContentList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={classes["content-list"]}>{children}</div>;
};

export default ContentList;

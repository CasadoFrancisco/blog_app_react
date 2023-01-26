import { Link } from "react-router-dom";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.card}>
      <img className={styles.images} src={props.image} />
      <Link to={"/postsdetaill/" + props.id}>
        <span className={styles.title}>{props.title}</span>
      </Link>
      <span className={styles.time}>{props.time}</span>
      <hr className={styles.hr} />

      <p className={styles.desciption}>{props.overview}</p>
    </div>
  );
};

export default Post;

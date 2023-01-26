import { useContext } from "react";
import { StateContext } from "../../StateContext";
import Loader from "../loader/Loader";
import Post from "./post/Post";
import styles from "./Posts.module.css";

const Posts = () => {
  const { news } = useContext(StateContext);

  if (news.length === 0) {
    return <Loader />;
  }
  return (
    <div className={styles.container}>
      {news.map((post) => (
        <Post
          author={post.author}
          id={post.id}
          image={post.imageUrl}
          key={post.id}
          overview={post.content}
          time={post.time}
          hora={post.date}
          title={post.title}
        />
      ))}
    </div>
  );
};

export default Posts;

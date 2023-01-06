import posts from '../../constants/posts.json';
import Post from './post/Post';
import styles from './Posts.module.css';

const Posts = () => {
	return (
		<div className={styles.container}>
			{posts.map((post, index) => (
				<Post
					category={post.category}
					id={post.id}
					image={post.image}
					key={index}
					overview={post.overview}
					time={post.time}
					title={post.title}
				/>
			))}
		</div>
	);
};

export default Posts;

import { Link } from 'react-router-dom';
import styles from './Post.module.css';

const Post = props => {
	return (
		<div className={styles.card}>
			<img className={styles.images} src={props.image} />
			<div className={styles.info}>
				{props.category.map((cat, index) => (
					<span key={index} className={styles.category}>
						{cat}
					</span>
				))}
			</div>
			<Link to={'/postsdetaill/' + props.id}>
				<span className={styles.title}>{props.title}</span>
			</Link>
			<hr className={styles.hr} />
			<span className={styles.time}>{props.time}</span>
			<p className={styles.desciption}>{props.overview}</p>
		</div>
	);
};

export default Post;

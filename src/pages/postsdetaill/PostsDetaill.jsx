// import Sidebar from "../../components/sidebar/Sidebar";
// import PostDetail from "../../components/postdetail/PostDetail";
import styles from './PostsDetaill.module.css';
import { useParams } from 'react-router-dom';
import data from '../../constants/posts.json';
import Sidebar from '../../components/sidebar/Sidebar';

const PostsDetaill = () => {
	const { id } = useParams();

	return (
		<div className={styles.container}>
			<div className={styles.detail}>
				<div className={styles.entremedio}>
					<img className={styles.image} src={data[id].image} />
					<h1 className={styles.title}>{data[id].title}</h1>
					<div className={styles.detail}>
						<span>author:{data[id].author}</span>
						<span>{data[id].time}</span>
					</div>
					<p className={styles.parrafo}>{data[id].overview}</p>
					<br />
					<br />
					<p className={styles.parrafo}>{data[id].overview}</p>
				</div>
			</div>
			<div className={styles.sidebar}>
				<Sidebar />
			</div>
		</div>
	);
};

export default PostsDetaill;

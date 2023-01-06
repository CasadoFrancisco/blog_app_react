import Hero from '../../components/hero/Hero';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import styles from './Home.module.css';

const Home = () => {
	return (
		<div>
			<Hero />
			<div className={styles.column}>
				<Posts />
				<Sidebar />
			</div>
		</div>
	);
};

export default Home;

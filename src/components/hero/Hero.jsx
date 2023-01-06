import styles from './Hero.module.css';

const Hero = () => {
	return (
		<div className={styles.container}>
			<div className={styles.words}>
				<span className={styles.titleSmall}>React & Node</span>
				<span className={styles.titleLarge}>BLOG</span>
			</div>
			<img
				className={styles.image}
				src='https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
				alt=''
			/>
		</div>
	);
};

export default Hero;

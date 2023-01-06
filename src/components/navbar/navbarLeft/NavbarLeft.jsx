import styles from './NavbarLeft.module.css';

const NavbarLeft = () => {
	return (
		<div className={styles.iconSocial}>
			<a
				href='https://www.facebook.com/'
				target='_blank'
				rel='noopener noreferrer'
				className={styles.iconos}
			>
				<i className='fab fa-facebook-square'></i>
			</a>
			<a
				href='https://www.instagram.com/'
				target='_blank'
				rel='noopener noreferrer'
				className={styles.iconos}
			>
				<i className='fa-brands fa-square-instagram'></i>
			</a>
			<a
				href='https://ar.pinterest.com/'
				target='_blank'
				rel='noopener noreferrer'
				className={styles.iconos}
			>
				<i className='fa-brands fa-square-pinterest'></i>
			</a>
			<a
				href='https://twitter.com/?lang=es'
				target='_blank'
				rel='noopener noreferrer'
				className={styles.iconos}
			>
				<i className='fa-brands fa-square-twitter'></i>
			</a>
		</div>
	);
};

export default NavbarLeft;

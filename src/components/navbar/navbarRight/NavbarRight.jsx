import { Link } from 'react-router-dom';
import styles from './NavbarRight.module.css';

const NavbarRight = () => {
	return (
		<div className={styles.containerCount}>
			<ul className={styles.containerList}>
				<li className={styles.links}>
					<Link to='/login'>LOGIN</Link>
				</li>
				<li className={styles.links}>
					<Link to='/register'>REGISTER</Link>
				</li>
				<i className='fa-solid fa-magnifying-glass'></i>
			</ul>
		</div>
	);
};

export default NavbarRight;

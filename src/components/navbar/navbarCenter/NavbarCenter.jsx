import { Link } from 'react-router-dom';
import styles from './NavbarCenter.module.css';

const NavbarCenter = () => {
	return (
		<div className={styles.container}>
			<ul className={styles.lista}>
				<li className={styles.links}>
					<Link to='/'>HOME</Link>
				</li>
				<li className={styles.links}>
					<Link to='/about'>ABOUT</Link>
				</li>
				<li className={styles.links}>
					<Link to='/contact'>CONTACT</Link>
				</li>
				<li className={styles.links}>
					<Link to='/write'>WRITE</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavbarCenter;

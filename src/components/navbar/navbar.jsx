import NavbarCenter from './navbarCenter/NavbarCenter';
import styles from './Navbar.module.css';
import NavbarLeft from './navbarLeft/NavbarLeft';
import NavbarRight from './navbarRight/NavbarRight';

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<NavbarLeft />
			<NavbarCenter />
			<NavbarRight />
		</div>
	);
};

export default Navbar;

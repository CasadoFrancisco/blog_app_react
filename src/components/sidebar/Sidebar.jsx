import style from './Sidebar.module.css';
const Sidebar = () => {
	return (
		<div className={style.container}>
			<div className={style.head}>
				<span className={style.title}>ABOUT ME</span>
				<img
					className={style.image}
					src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
				/>
				<p className={style.paragraph}>
					Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
					amet ex esse.Sunt eu ut nostrud id quis proident.
				</p>
			</div>
			<div className={style.body}>
				<span className={style.title}>CATEGORIES</span>
				<ul className={style.listings}>
					<li className={style.list}>Life</li>
					<li className={style.list}>Sport</li>
					<li className={style.list}>Tech</li>
					<li className={style.list}>Music</li>
					<li className={style.list}>Styles</li>
					<li className={style.list}>Cinema</li>
				</ul>
			</div>
			<div className={style.containerIcons}>
				<span className={style.title}>FOLOW US</span>
				<div className={style.iconsPosition}>
					<a
						href='https://www.facebook.com/'
						target='_blank'
						rel='noopener noreferrer'
						className={style.icons}
					>
						<i className='fab fa-facebook-square'></i>
					</a>
					<a
						href='https://www.instagram.com/'
						target='_blank'
						rel='noopener noreferrer'
						className={style.icons}
					>
						<i className='fa-brands fa-square-instagram'></i>
					</a>
					<a
						href='https://ar.pinterest.com/'
						target='_blank'
						rel='noopener noreferrer'
						className={style.icons}
					>
						<i className='fa-brands fa-square-pinterest'></i>
					</a>
					<a
						href='https://twitter.com/?lang=es'
						target='_blank'
						rel='noopener noreferrer'
						className={style.icons}
					>
						<i className='fa-brands fa-square-twitter'></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

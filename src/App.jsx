import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';
import Navbar from './components/navbar/navbar';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Write from './pages/write/Write';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import './App.css';
import PostsDetaill from './pages/postsdetaill/PostsDetaill';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/write' element={<Write />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/postsdetaill/:id' element={<PostsDetaill />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

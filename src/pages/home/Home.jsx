import Categories from "../../components/categorias/Categories";
import Hero from "../../components/hero/Hero";
import Posts from "../../components/posts/Posts";

import "./Home.css";
import { useContext } from "react";
import { StateContext } from "../../StateContext";
import Loader from "../../components/loader/Loader";

const Home = () => {
    const { search, setSearch } = useContext(StateContext);
    const handleSearch = () => {
        setSearch(true);
    };

    return (
        <div className="containerHome">
            <Hero />

            {search ? <Categories /> : null}
            {search ? null : (
                <div className="contenedorAlfa">
                    <div className="conteinerParrafoButton">
                        <p className="parrafoHome">Search by category</p>
                        <div className="containerButton">
                            <button
                                className="learn-more"
                                onClick={handleSearch}
                            >
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Learn More</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="column">
                <Posts />
            </div>
        </div>
    );
};

export default Home;

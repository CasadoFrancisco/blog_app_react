import { useContext } from "react";
import { StateContext } from "../../StateContext";
import "./Categories.css";

const Categories = () => {
  const { setcategory } = useContext(StateContext);

  const handlerBussines = () => {
    setcategory("business");
  };
  const handlerSport = () => {
    setcategory("sports");
  };
  const handlerWord = () => {
    setcategory("world");
  };
  const handlerScience = () => {
    setcategory("science");
  };
  const handlerStartup = () => {
    setcategory("startup");
  };

  return (
    <div className="contenedorAlfa">
      <div className="containerCategories">
        <h2 className="titleCategories">CATEGORIES</h2>
        <p className="parrafoCategories">Choose a category</p>
        <div className="containerButtonCategories">
          <button className="buttonCategories" onClick={handlerBussines}>
            Bussines
          </button>
          <button className="buttonCategories" onClick={handlerSport}>
            Sports
          </button>
          <button className="buttonCategories" onClick={handlerWord}>
            Word
          </button>
          <button className="buttonCategories" onClick={handlerScience}>
            Science
          </button>
          <button className="buttonCategories" onClick={handlerStartup}>
            Startup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;

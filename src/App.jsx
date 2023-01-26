import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import {
  Navbar,
  About,
  Home,
  Contact,
  Write,
  Login,
  Register,
  PostsDetaill,
  Settings,
} from "./componentes";
import "./App.css";
import { useState } from "react";
import { StateContext } from "./StateContext";
import { useEffect } from "react";
import { get } from "./utilities/Get";

const App = () => {
  const [state, setstate] = useState(false);
  const [news, setNews] = useState([]);
  const [category, setcategory] = useState("all");
  const [search, setSearch] = useState(false);

  useEffect(() => {
    setNews([]);
    get(category)
      .then((data) => {
        setNews(data.data);
      })
      .catch((error) => console.log("algo paso:" + error));
  }, [category]);

  return (
    <StateContext.Provider
      value={{
        state,
        setstate,
        category,
        setcategory,
        news,
        setNews,
        search,
        setSearch,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/write" element={state ? <Write /> : <Register />} />
          <Route path="/login" element={state ? <Home /> : <Login />} />
          <Route path="/register" element={state ? <Home /> : <Register />} />
          <Route path="/postsdetaill/:id" element={<PostsDetaill />} />
          <Route
            path="/settings"
            element={state ? <Settings /> : <Register />}
          />
        </Routes>
      </BrowserRouter>
    </StateContext.Provider>
  );
};

export default App;

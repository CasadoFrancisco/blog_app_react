// import Sidebar from "../../components/sidebar/Sidebar";

import "./PostsDetaill.css";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { StateContext } from "../../StateContext";

const PostsDetaill = () => {
    const { id } = useParams();
    const { news } = useContext(StateContext);
    const [state] = useState(news.filter((object) => object.id === id));
    console.log(state);

    return (
        <div className="containerPostDetaill">
            <div className="containerPostDetaillPage">
                <div className="containerImag">
                    <img className="imgPostDeataill" src={state[0].imageUrl} />
                </div>

                <div className="containerTime">
                    <span className="datePostDetaill">{state[0].date}</span>
                    <span className="datePostDetaill">{state[0].time}</span>
                </div>
                <div className="containerUrlPostDetaill">
                    <p className="parrafoTimePostDetaill">
                        Clicking here, will take you to the page where the
                        publication was made.....
                    </p>
                    <a href={state[0].url}>
                        <button className="buttonPostDetaill">
                            click here to redirect
                        </button>
                    </a>
                </div>
            </div>
            <div className="containerInfoPostDeatill">
                <div className="containerInfoDetaill">
                    <h1 className="titlePostDetaill">{state[0].title}</h1>
                    <p className="parrafoPostDetaill">{state[0].content}</p>
                    <a className="urlPostDetaill" href={state[0].readMoreUrl}>
                        <button className="buttonPostDetaill">
                            {" "}
                            more detaills
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PostsDetaill;

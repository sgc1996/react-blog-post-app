import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../components/home/Home";
import Post from "../components/post/Post";

const Router = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"blogs/:postId"} element={<Post />} />
        </Routes>
    );
};

export default Router;
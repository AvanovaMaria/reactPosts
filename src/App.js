import React from "react";
import { useState } from "react";

import mockedData from "../data.json";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { List } from "./components/List";
import './index.css';

export const App = () => {
    const [ postList, setPostList ] = useState(mockedData);
    return (
    <div className="appContainer">
    <Header changeList={setPostList} />
    <List list={postList}/>
    <Footer />
    </div>
    );
};
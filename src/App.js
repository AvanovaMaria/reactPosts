import React from "react";
import { useState, useEffect } from "react";

import mockedData from "../data.json";
import api from './utils/api';

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { List } from "./components/List";

import './index.css';

export const App = () => {
  const [ postList, setPostList ] = useState([]);
    const [ user, setUser ] = useState(null);
    

useEffect ((itemID) => {
    api.getPosts().then((data) => {
        setPostList(data)
    })
}, []);

useEffect (() => {
    api.getCurentUser().then((user) => {
        setUser(user)
    });
    }, []);

    return (
    <div className="appContainer">
    <Header changeList={setPostList} user={user}>
    </Header>
    <List list={postList} />
    <Footer />
    </div>
    );
};

export default App;
import React, { useState } from 'react';
// import { Start } from '../../components/start/start';
import './home.css';
import { Link, Switch, Route } from 'react-router-dom';
import { ArticleContent } from '../blog/article';
import { BlogList } from '../blog/list';
import { About } from '../about/about';

export const Home: React.FC = () => {
  // const [showNav, setShowNav] = useState(false)
  return (
    <div className="home-container">
      <div className="header">
        <div className="avatar"></div>
        <h2 className="name">SoulDa</h2>
        <div className="navi">
          <Link to={"/"} className="navi-item">
            首页
          </Link>
          <Link to={"/about"} className="navi-item">
            关于
          </Link>
        </div>
      </div>
      <div className="content">
        <Switch>
          <Route path={"/article/:id"}>
            <ArticleContent></ArticleContent>
          </Route>
          <Route path={"/about"}>
            <About></About>
          </Route>
          <Route path={"/"}>
            <BlogList></BlogList>
          </Route>
        </Switch>
      </div>
    </div>
  );
}
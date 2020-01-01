import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { Home } from './pages/home/home';
import { BlogList } from './pages/blog/list';
import { Admin } from './pages/admin/index';
import { ArticleContent } from "./pages/blog/article";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {process.env.NODE_ENV === "development" && (
          <Route path={"/edit"}>
            <Admin></Admin>
          </Route>
        )}
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

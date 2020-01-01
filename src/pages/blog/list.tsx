import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Article } from '../../models';
import './list.css';
import { Link, useHistory } from 'react-router-dom';

export const BlogList: React.FC =  () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    Axios.get('http://localhost:7001/articles').then(res => {
      if (res.status === 200) {
        const { list: articles } = res.data;
        setArticles(articles);
      }
    })
  }, [])

  const history = useHistory();

  return (
    <div className="list-container">
      <div className="list">
        {articles.map((article: Article, index) => {
          return (
            <div key={`${index}${article.id}`} className="card" onClick={() => {
              history.push(`/article/${article.id}`);
            }}>
              <h1>{article.title}</h1>
              <h2>{article.subtitle}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
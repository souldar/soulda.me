import React, { useEffect, useState } from 'react'
import { Article } from '../../models';
import './list.css';
import { useHistory } from 'react-router-dom';
import { axios } from '../axios';

export const BlogList: React.FC =  () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    axios.get('articles').then(res => {
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
          const updateTime = article.updateTime ? new Date(article.updateTime) : new Date();
          return (
            <div key={`${index}${article.id}`} className="card" onClick={() => {
              history.push(`/article/${article.id}`);
            }}>
              <h1>{article.title}</h1>
              <h2>{article.subtitle}</h2>
            <p>{`${updateTime.getFullYear()}-${updateTime.getMonth() + 1}-${updateTime.getDate()}`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
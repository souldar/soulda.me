import React, { useEffect, useState } from 'react';
import { md } from '../../mdParser';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { Article } from '../../models';
import './article.css';

export const ArticleContent: React.FC = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article>();
  useEffect(() => {
    Axios.get("http://localhost:7001/article", { params: { articleId: id } }).then(res => {
      if (res.status === 200) {
        console.log(res.data);
        setArticle(res.data)
      }
    });
  }, [id])

  return (
    <div className="article-container" dangerouslySetInnerHTML={{ __html: md.render(article?.content || '') }}></div>
  )
}
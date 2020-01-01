import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios';
import MarkdownIt from 'markdown-it';
import codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import "codemirror/theme/material-darker.css";
import './index.css';

const md = new MarkdownIt();

export const Admin: React.FC = () => {
  const editor = useRef<HTMLDivElement>(null);
  const [content, setcontent] = useState('');
  const [articleInfo, setArticleInfo] = useState({title: '', subtitle: ''})
  useEffect(() => {
    if (editor.current) {
      const myEditor = codemirror(editor.current, {
        mode: "markdown",
        value: "",
        lineWrapping: true,
        lineNumbers: true,
        theme: "material-darker"
      });

      myEditor.on('changes', (editor) => {
        const content = editor.getValue()
        setcontent(content)
      })
    }
  }, [])
  return (
    <div>
      <div className="info-container">
        <input
          value={articleInfo.title}
          onChange={event => {
            setArticleInfo({
              title: event.target.value,
              subtitle: articleInfo.subtitle
            });
          }}
        ></input>
        <input
          value={articleInfo.subtitle}
          onChange={event => {
            setArticleInfo({
              title: articleInfo.title,
              subtitle: event.target.value
            });
          }}
        ></input>
      </div>
      <div className="write-container">
        <div ref={editor} className="editor"></div>
        <div
          className="previewer"
          dangerouslySetInnerHTML={{ __html: md.render(content) }}
        ></div>
      </div>
      <button onClick={releaseArticle.bind(null, { ...articleInfo, content })}>发布</button>
    </div>
  );
}

function releaseArticle(article: any) {
  axios
    .post("http://localhost:7001/article", { article })
    .then(res => {
      console.log("release success", res);
    })
    .catch(err => {
      console.log(err);
    });
}
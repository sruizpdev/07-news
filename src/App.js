import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ListNews from './components/ListNews';

function App() {
  const [category, saveCategory] = useState('');
  const [news, saveNews] = useState([]);

  useEffect(() => {
    const consultApi = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=pl&category=${category}&apiKey=5b5646634729475dbbc90d83fa122c4c`;
      const response = await fetch(url);
      const news = await response.json();
      saveNews(news.articles);
    };

    consultApi();
  }, [category]);
  return (
    <Fragment>
      <Header title="News" />
      <div className="container white">
        <Form saveCategory={saveCategory} />
        <ListNews news={news} />
      </div>
    </Fragment>
  );
}

export default App;

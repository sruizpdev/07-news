import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';

const ListNews = ({ news }) => (
  <div className="row">
    {news.map((noticia) => (
      <Noticia key={noticia.url} noticia={noticia} />
    ))}
  </div>
);

ListNews.propTypes = {
  noticias: PropTypes.array.isRequired,
};

export default ListNews;

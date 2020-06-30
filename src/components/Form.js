import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';

const Form = ({ saveCategory }) => {
  const OPTIONS = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'business' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'health', label: 'health' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sports' },
    { value: 'technology', label: 'Technology' },
  ];

  const [category, SelectNews] = useSelect('general', OPTIONS);

  const searchNews = (e) => {
    e.preventDefault();
    saveCategory(category);
  };
  return (
    <div className={`${styles.buscador} row`}>
      <div className="col w12 m8 offset-m2">
        <form onSubmit={searchNews}>
          <h2 className={styles.heading}>Search news by category</h2>
          <SelectNews />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles.btn_block} btn-large amber darken-2`}
              value="Search"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

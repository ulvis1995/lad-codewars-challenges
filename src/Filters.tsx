import React from 'react';
import { Select } from 'antd';
import { languages, rank } from './constants';
import st from './app.module.scss';
import { FiltersProps } from './types';

const Filters = ({ handleChangeKyu, handleChangeLanguage }: FiltersProps) => {
  return (
    <div className={st.filters}>
      <Select
        placeholder="Уровень (kyu)"
        className={st.filters_item}
        allowClear
        onSelect={handleChangeKyu}
        options={rank.map((item) => {
          return { value: `${item}`, label: `${-item} kyu` };
        })}
        onClear={() => handleChangeKyu(null)}
      />
      <Select
        placeholder="Язык"
        className={st.filters_item}
        allowClear
        onSelect={handleChangeLanguage}
        options={languages.map((language) => {
          return { value: language.id, label: language.name };
        })}
        onClear={() => handleChangeLanguage(null)}
      />
    </div>
  );
};

export default Filters;

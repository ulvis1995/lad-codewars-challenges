import React from 'react';
import { Collapse } from 'antd';
import st from './app.module.scss';
import ChallengeList from './ChallengeList';
import Filters from './Filters';

const App = () => {
  const [chooseKyu, setKyu] = React.useState<string | null>(null);
  const [chooseLanguage, setLanguage] = React.useState<string | null>(null);

  const handleChangeKyu = (value: string | null) => {
    return setKyu(value);
  };

  const handleChangeLanguage = (value: string | null) => {
    setLanguage(value);
  };

  return (
    <div className={st.App}>
      <Filters handleChangeKyu={handleChangeKyu} handleChangeLanguage={handleChangeLanguage} />
      <ChallengeList chooseKyu={chooseKyu} chooseLanguage={chooseLanguage} />
    </div>
  );
};

export default App;

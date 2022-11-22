import React from 'react';
import { Collapse } from 'antd';
import './index.css';
import ChallengeList from './components/ChallengeList/ChallengeList';
import Filters from './components/Filters/Filters';
import ButtonScroll from './components/ButtonScroll/ButtonScroll';

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
    <div className="App">
      <Filters handleChangeKyu={handleChangeKyu} handleChangeLanguage={handleChangeLanguage} />
      <ChallengeList chooseKyu={chooseKyu} chooseLanguage={chooseLanguage} />
      <ButtonScroll />
    </div>
  );
};

export default App;

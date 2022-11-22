import React from 'react';
import { Collapse } from 'antd';
import { challengeList, languages } from './constants';
import st from './app.module.scss';
import Markdown from 'markdown-to-jsx';
import { ChallengeListProps } from './types';

const { Panel } = Collapse;

const ChallengeList = ({ chooseKyu, chooseLanguage }: ChallengeListProps) => {
  const challengeFiltred = challengeList
    .filter((challenge) =>
      chooseKyu !== null ? String(challenge.rank.id) === chooseKyu : challenge,
    )
    .filter((challenge) =>
      chooseLanguage !== null ? challenge.languages.find((i) => i === chooseLanguage) : challenge,
    );

  return (
    <>
      {challengeFiltred.length !== 0 ? (
        <Collapse className={st.collapse}>
          {challengeFiltred.map((challenge) => (
            <Panel
              header={challenge.name}
              key={challenge.id}
              className={st.challenge}
              extra={<span>{challenge.rank.name}</span>}>
              <div className={st.panel_text}>
                <p className={st.lang}>
                  <strong>Языки решения: </strong>
                  {challenge.languages
                    .map((language) => {
                      const find = languages.find((i) => i.id === language);
                      return find ? (language = find.name) : language;
                    })
                    .join(', ')}
                </p>
                <Markdown>{challenge.description}</Markdown>
                <a className={st.referense} href={challenge.url} target="_blank">
                  Перейти к решению
                </a>
              </div>
            </Panel>
          ))}
        </Collapse>
      ) : (
        <h1 className={st.none_result}>
          По вашему запросу ничего не найдено. Попробуйте изменить запрос
        </h1>
      )}
    </>
  );
};

export default ChallengeList;

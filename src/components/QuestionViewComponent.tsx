import { Button, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CharacterObject, QuestionDic, StaticCharaList, chooseBestQuestion, } from './YesNoDataTable';

const QuestionViewContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const QuestionViewComponent: React.FC = () => {
  const [displayedQuestionKey, setDisplayedQuestionKey] = useState<string>('赤');
  const [tempCharaList, setTempCharaList] = useState<CharacterObject[]>(StaticCharaList);

  const onClickedYes = () => {
    setRemainingChara(displayedQuestionKey, true);
  }
  const onClickedNo = () => {
    setRemainingChara(displayedQuestionKey, false);
  }

  const setRemainingChara = (questionKey: string, userAnswer: boolean) => {
    setTempCharaList(prev => prev.filter(chara => {
      return chara.answers[questionKey] === userAnswer;
    }))
  }

  //useEffectはstateが変更された時に実行されるらしいよ
  useEffect(() => {
    const chara = tryGetLastOneChara();
    if (chara) {
      setDisplayedQuestionKey((q: string) => q = chara.name);
    }
    else {
      setDisplayedQuestionKey((q: string) => q = chooseBestQuestion(tempCharaList));
    }
  }, [tempCharaList]);

  const tryGetLastOneChara = (): CharacterObject | false => {
    return tempCharaList.length === 1 ? tempCharaList[0] : false;
  }

  return (
    <QuestionViewContainer>
      <Typography > {QuestionDic[displayedQuestionKey]??displayedQuestionKey}</Typography>
      <Button variant='outlined' onClick={onClickedYes}>はい</Button>
      <Button variant='outlined' onClick={onClickedYes}>多分そう</Button>
      <Button variant='outlined' onClick={onClickedNo}>多分違う</Button>
      <Button variant='outlined' onClick={onClickedNo}>いいえ</Button>

    </QuestionViewContainer>
  )
}

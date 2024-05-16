import { Button, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CharacterObject, QuestionDic, chooseBestQuestion, } from './YesNoDataTable';
import characterData from '../characterData.json';

const StaticCharaList: CharacterObject[] = characterData;

const QuestionViewContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
});

const StyledButton = styled(Button)`
  variant:"outlined"; 
  width:400px;
`;


interface QuestionViewProps {
  onComplete(name:string): void;
}


export const QuestionViewComponent: React.FC<QuestionViewProps> = ({onComplete}) => {
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
      onComplete(chara.name);
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
      <StyledButton variant='outlined' onClick={onClickedYes}>はい</StyledButton>
      <StyledButton variant='outlined' onClick={onClickedYes}>多分そう</StyledButton>
      <StyledButton variant='outlined' onClick={onClickedNo}>多分違う</StyledButton>
      <StyledButton variant='outlined' onClick={onClickedNo}>いいえ</StyledButton>

    </QuestionViewContainer>
  )
}

import { Button, Typography, styled } from '@mui/material';
import React from 'react';

interface QuestionViewProps {
  question:string;
}

const QuestionViewContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});


export const  QuestionViewComponent:React.FC<QuestionViewProps>=({question})=> {
  return (
    <QuestionViewContainer>
    <Typography > {question}</Typography>
    <Button variant='outlined'>はい</Button>
    <Button variant='outlined'>多分そう</Button>
    <Button variant='outlined'>多分違う</Button>
    <Button variant='outlined'>いいえ</Button>

    </QuestionViewContainer>
  )
}
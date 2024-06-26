
import { Typography, Button, styled } from '@mui/material';
import { NibiStandImage } from './NibiStandImage.tsx';
import React from 'react';

const ContainerFirst = styled('div')({
  display: 'flex',
  alignItems: 'center',  // コンテンツを垂直方向に中央揃え
  gap: '10px',           // ボタンと画像の間に隙間を設ける
});

interface TitleViewProps {
  onButtonClick: () => void;
}


export const TitleViewComponent: React.FC<TitleViewProps> = ({onButtonClick}) => {
  return (
    <>

      <ContainerFirst>
        <div>
          <Typography variant="h3">ニビネイター！</Typography>
          <Button variant="contained" size="large" onClick={onButtonClick}>はじめる</Button>
        </div>
        <NibiStandImage></NibiStandImage>
      </ContainerFirst>
    </>
  )
}

export default TitleViewComponent

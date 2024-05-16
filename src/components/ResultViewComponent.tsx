
import { Button, styled } from '@mui/material';
import { NibiStandImage } from './NibiStandImage.tsx';
import React from 'react';
import { NamePicturePathPairs } from './CharaImageTable.ts';


const ResiultViewContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '10px',
});

const ResiultViewContainerSecond = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
});


interface ResultViewProps {
    name: string;
    onButtonClick: () => void;
}

const PictureFrame = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '270px',
    height: '270px',
    backgroundColor: "#222233",
});


export const ResultViewComponent: React.FC<ResultViewProps> = ({ name, onButtonClick }) => {
    return (
        <>
            <ResiultViewContainer>
                <ResiultViewContainerSecond>
                    <p>あなたが推測したキャラクターは……</p>
                    <h1>{name}</h1>
                    <p>ですね？</p>
                    <PictureFrame> 
                        <img src={NamePicturePathPairs[name]}/>
                    </PictureFrame>
                    <br/>
                    <Button variant="contained" size="large" onClick={onButtonClick}>もういちど</Button>
                </ResiultViewContainerSecond>
                <NibiStandImage></NibiStandImage>
            </ResiultViewContainer>
        </>
    )
}

export default ResultViewComponent

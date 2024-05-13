import React from 'react';
import { styled } from '@mui/system';
const NibiImagePath = './images/NibiStand_Trim.png'


const ImageContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const MirroredImage = styled('img')({
    maxWidth: '500px',      
    maxHeight: '500px',
    margin: 'auto',
    padding: '10px',
    transform: 'scaleX(-1)',
});

export const NibiStandImage = () => {
    return (
        <ImageContainer>
            <MirroredImage src={NibiImagePath}>
            </MirroredImage>
        </ImageContainer>
    )
}


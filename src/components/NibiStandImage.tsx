import React from 'react';
import { styled } from '@mui/system';
const NibiImagePath = './images/NibiStand.png'


const ImageContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const MirroredImage = styled('img')({
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


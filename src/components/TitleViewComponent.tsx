
import { Typography,Button} from '@mui/material';
import {NibiStandImage} from './NibiStandImage.tsx';

export const TitleViewComponent = () =>  {
  return (
    <>
      <Typography variant="h1">ニビネイター！</Typography>
      <Button variant="contained" size="large">はじめる</Button>
      <NibiStandImage></NibiStandImage>
    </>
  )
}

export default TitleViewComponent

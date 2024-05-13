import './App.css'
import {TitleViewComponent} from './components/TitleViewComponent';
import {QuestionViewComponent} from './components/QuestionViewComponent';

const question1= "そのキャラクターは、赤い服を着ていますか？"

function App() {
  return (
    <>
      <TitleViewComponent></TitleViewComponent>
      <QuestionViewComponent question={question1}></QuestionViewComponent>

    </>
  )
}

export default App

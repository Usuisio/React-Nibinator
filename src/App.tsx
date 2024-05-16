import './App.css'
import { TitleViewComponent } from './components/TitleViewComponent';
import { QuestionViewComponent } from './components/QuestionViewComponent';
import { ResultViewComponent } from './components/ResultViewComponent';
import { useState } from 'react';


type View = 'title' | 'question' | 'result';

function App() {
  const [view, setview] = useState<View>("title")
  const [result, setresult] = useState<string>("")

  const handleStart = () => {
    setresult("");
    setview("question");
  }

  const handleComplete = (name:string) => {
    setview("result");
    setresult(name);
  }


  return (
    <>
      {view === 'title' && <TitleViewComponent onButtonClick={handleStart}/>}
      {view === 'question' &&<QuestionViewComponent onComplete={handleComplete} />}
      {view === 'result' &&<ResultViewComponent name={result} onButtonClick={handleStart} />}
    </>
  )
}

export default App

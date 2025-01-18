import { useEffect, useState } from 'react';
// import components
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
// import styles
import './App.css'

const App = () => {
  const [revType, setType] = useState(() => {
    const localData = JSON.parse(localStorage.getItem("reviews"));
    if (localData) {
      return localData;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    }
  })

  const updateFeedback = (feedbackType) => {
    setType({...revType, [feedbackType]:revType[feedbackType] + 1})
  };

  const resetType = () => {
    setType({
      good: 0,
      neutral: 0,
      bad: 0
    })
  };

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(revType))
  }, [revType])



  const totalFeedback = revType.good + revType.neutral + revType.bad;

  return (
    <>
      <Description />
      <Options resetType={resetType} updType={updateFeedback} total={totalFeedback}/>
      {!totalFeedback ? <Notification /> : <Feedback reviews={revType} total={totalFeedback} />}
    </>
  );
};

export default App

import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsVAlid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length  > 0){
      setIsVAlid(true); // BG color disappear after typing any letter
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
    setIsVAlid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' :''}`}>
        <label style={{color: !isValid? 'red' : 'black'}}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}
         style={{
          borderColor: !isValid? 'red' : 'black',
          backgroundColor: !isValid? 'pink' : 'transparent' }}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

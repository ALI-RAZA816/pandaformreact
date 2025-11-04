
import Head from './Head';
import style from './FormContainer.module.css'
import Form from './Form';
import Foot from './Foot';
import { useState, useRef } from 'react';

function FormContainer() {
  const [movesEyes, setmovesEyes] = useState(false);
  const [movesHands, setHandsEyes] = useState(false);
const name = useRef();
const password = useRef();

  const EyesFocusHandler = () => {
    setmovesEyes(true);
  }

  const EyesBlurHandler = () => {
    setmovesEyes(false);
  }

  const HandFocusHandler = () => {
    setHandsEyes(true);
  }

  const HandBlurHandler = () => {
    setHandsEyes(false);
  }
const submitHandler = (event)=>{
event.preventDefault();
if(!name.current.value || !password.current.value){ 
alert("Field is required.");
return;
}
alert("You successfully login.")
 
}

  return (
    <div className={style.formContainer}>
      <Head movesEyes={movesEyes} movesHands = {movesHands} />
      <Form submitHandler = { submitHandler} name ={name} password = {password} FocusHandler={EyesFocusHandler} BlurHandler={EyesBlurHandler} HandFocusHandler = {HandFocusHandler} HandBlurHandler = {HandBlurHandler} />
      <Foot />
    </div>
  )
}
export default FormContainer;

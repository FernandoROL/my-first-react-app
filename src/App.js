import React from 'react';

const Team = (props) => {
  return (
    <div>
      <Sobre name={props.name} role={props.role} age={props.age}></Sobre>
      <Social fb={props.fb} in={props.in} ig={props.ig}/>
    </div>
  );
}

const Sobre = (props) => {
  return (
    <div>
      <h2>Hello I'm {props.name}</h2>
      <h3>Role: {props.role}</h3>
      <h3>Age: {props.age}</h3>
    </div>
  );
}

const Social = (props) => {
  return (
    <div>
      <a href={props.fb}>Facebook</a>
      <br/>
      <a href={props.in}>Linkedin</a>
      <br/>
      <a href={props.ig}>Instagram</a>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <h1>Get to know out team:</h1>
      <Team name="Fernando" role="Web Developer" age="20" fb='https://facebook.com' in='https://linkedin.com' ig='https://instagram.com'></Team>
      <Team name="Isabella" role="CEO" age="35" fb='https://facebook.com' in='https://linkedin.com' ig='https://instagram.com'></Team>
    </div>
  )
}
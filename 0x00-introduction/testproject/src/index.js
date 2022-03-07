import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[1]} exercise={props.exercises[1]}/>
      <Part part={props.parts[2]} exercise={props.exercises[2]}/>
      <Part part={props.parts[3]} exercise={props.exercises[3]}/>
    </div>
    )
  }

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises[1] + props.exercises[2] + props.exercises[3]}</p>
    )
  }

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [0, part1, part2, part3]
  const exercises = [0, exercises1, exercises2, exercises3]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises}/>
      <Total exercises={exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

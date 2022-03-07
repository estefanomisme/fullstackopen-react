import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({part, exercise}) => {
  return (
    <p>{part}: {exercise} exercise(s)</p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      <Part part={parts[1].name} exercise={parts[1].exercises}/>
      <Part part={parts[2].name} exercise={parts[2].exercises}/>
      <Part part={parts[3].name} exercise={parts[3].exercises}/>
    </div>
    )
  }

const Total = ({parts}) => {
  return (
    <p>Number of exercises {parts[1].exercises + parts[2].exercises + parts[3].exercises}</p>
    )
  }

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [0, 
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

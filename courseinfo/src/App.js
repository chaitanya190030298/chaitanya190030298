import React from 'react'

const Header = (props) => (
  <h1>
      { props.title }
  </h1>
)

const Content = (props) => (
  <div>
      <p>
          {props.Part1} {props.Exercises1}
      </p>
      <p>
          {props.Part2} {props.Exercises2}
      </p>
      <p>
          {props.Part3} {props.Exercises3}
      </p>
  </div>
);

const Total = (props) => (
  <div>
      <p>Number Of Exercises {props.Exercises1 + props.Exercises2 + props.Exercises3}</p>
  </div>
)

const App = () => {
const Course = 'Half Stack application development'
const Part1 = 'Fundamentals of React'
const Exercises1 = 10
const Part2 = 'Using props to pass data'
const Exercises2 = 7
const Part3 = 'State of a component'
const Exercises3 = 14

return (
  <div>
    < Header title = {Course} />
    < Content Part1={Part1} Exercises1={Exercises1} Part2={Part2} Exercises2={Exercises2} Part3={Part3} Exercises3={Exercises3} />
    < Total Exercises1={Exercises1} Exercises2={Exercises2} Exercises3={Exercises3} />
  </div>
)
}
export default App
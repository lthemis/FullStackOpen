import React, { useState } from 'react'

const Button = (props) => {
  return (<button onClick={props.handleClick}>{props.text}</button>)
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (isNaN(props.positivityRate)){
    return <div>No feedback given</div>
  }
  return (<div>
    <table>
      <tbody>
        <StatisticLine text="good" value ={props.good} />
        <StatisticLine text="neutral" value ={props.neutral} />
        <StatisticLine text="bad" value ={props.bad} />
        <StatisticLine text="all" value ={props.bad+props.neutral+props.good} />
        <tr>
          <td>Positivity rate:</td>
          <td>{props.positivityRate}%</td>
        </tr>
        <tr>
          <td>Average score:</td>
          <td>{props.averageScore}</td>
        </tr>
      </tbody>
    </table>
  </div>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => {
    setGood(good + 1)
  }

  const setToNeutral = () => {
    setNeutral(neutral + 1)
  }

  const setToBad = () => {
    setBad(bad + 1)
  }
  let averageScore = (good*1+bad*(-1))/(good+neutral+bad);
  let positivityRate = good/(good+neutral+bad) * 100;

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0,0,0,0,0,0,0])

  const generateQuote = () => {
    let random = Math.floor(Math.random() * anecdotes.length);
    setSelected(anecdotes[random])
  }

  const handleVote = () => {
    const copyPoints = [...vote]
    copyPoints[anecdotes.indexOf(selected)]+=1;
    setVote(copyPoints)
  }

  const winner = () => {
    if (Math.max(...vote) === 0) {
      return 'No votes'
    } 
    return anecdotes[vote.indexOf(Math.max(...vote))]
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={()=> setToGood()} text={"Good"}></Button>
      <Button handleClick={()=> setToNeutral()} text={"Neutral"}></Button>
      <Button handleClick={()=> setToBad()} text={"Bad"}></Button>
      <h2>stats</h2>
      <Statistics positivityRate={positivityRate} averageScore={averageScore} good={good} neutral={neutral} bad={bad}></Statistics>
      <button onClick={generateQuote}>Click to generate a quote</button>
      <button onClick={handleVote}>Vote up</button>
      <p>Quote: {selected === 0 ? "Quote not generated" : selected}. Vote count: {vote[anecdotes.indexOf(selected)]}</p>
      <h2>Winner</h2>
      <p>{winner()}</p>
    </div>
  )
}

export default App
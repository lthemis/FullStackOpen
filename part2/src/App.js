import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Person from './components/Person'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: 123123123, id:1 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filterVal, setFilter] = useState('')

  const hook = () => {
    axios.get('http://localhost:3002/persons').then(response => setPersons(response.data))
  }
  useEffect(hook, [])

  const addNewPerson = (event) => {
    event.preventDefault()
    const newPersonObj = {
      name: newName,
      num: newNum,
      id: persons.length+1
    }
    persons.map(person => person.name).includes(newName) ?
      alert(`${newName} is already added`) : 
      setPersons(persons.concat(newPersonObj))
      setNewName('')
      setNewNum('')

  }

  const handleNoteChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <Filter handleFilter={handleFilter}/>
      <h2>Phonebook</h2>
      <Form addNewPerson={addNewPerson} handleNoteChange={handleNoteChange} handleNumChange={handleNumChange} newName={newName} newNum={newNum}/>
      <Person persons={persons} filterVal={filterVal} />
    </div>
  )
}

export default App
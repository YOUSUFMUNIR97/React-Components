import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './assets/Components/Button'
import Card from './assets/Components/Card'
import Input from './assets/Components/Input'

function App() {
  const [buttonText, setButtonText] = useState("Next");
  const [text, setText] = useState("")

  let first = () => {
    alert("testing")
  }
  let second = () => {
    console.log("testing")
  }

  let changeText = (text) => {
    setButtonText(text);
  }

  let users = [
    {
      id: 1,
      name: "abc",
      age: 20,
      institute: "SAIMS",
      isActive: "true",
    },
    {
      id: 2,
      name: "def",
      age: 24,
      institute: "SAIMS",
      isActive: "false",
    },
    {
      id: 3,
      name: "wewe",
      age: 22,
      institute: "SAIMS",
      isActive: "true",
    },
    {
      id: 4,
      name: "dffgf",
      age: 21,
      institute: "SAIMS",
      isActive: "true",
    },
    {
      id: 5,
      name: "eerte",
      age: 21,
      institute: "SAIMS",
      isActive: "true",
    },
  ]

var a;

  let getValue = (e) => {
    console.log(e.target.value)
    setText(e.target.value) 
  }


  return (
    <>
      {/* ================Button=============== */}
      <h1>Button</h1>
      <Button onClick={first} ButtonValue="First" />
      <Button onClick={second} ButtonValue="Second" />
      <a href="https://bobbyhadz.com/blog/react-button-link#:~:text=You%20can%20use%20a%20Button,the%20material-ui%20package%20installed.&text=If%20you%20need%20to%20use,prop%20to%20the%20Button%20component.&text=We%20set%20the%20component%20prop,the%20Link%20React%20Router%20component.">
        <Button ButtonValue="Third" />
      </a>
      <Button onClick={() => { console.log("HelloWorld") }} ButtonValue="Fourth" />
      <Button onClick={() => changeText("newText")} ButtonValue={buttonText} />

      {/* ================Card=============== */}
      <h1>Card</h1>
      <Card Value={users.map((value, i) => {
        return (
          <>
          <p key={i}> 
           <p>{value.id}</p>
           <p>{value.name}</p>
           <p>{value.age}</p>
           <p>{value.institute}</p>
           <p>{value.isActive}</p>
           </p>
          </>
        )
      })} />
    
    <h1>Input</h1>
    <Input Value={getValue}/>
      <p> Value is {text} </p>
    
    </>
  )
}

export default App

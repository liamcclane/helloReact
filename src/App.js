import React from 'react'; // this import let's us write in JSX
// import logo from './logo.svg'; // don't need the logo anymore
import './App.css';

// my made imports
import MyNewComponent from './components/MyNewComponent';
import Header from './components/Header';
import Boring from './components/otherComponent/Boring';

const Button = (props) => {
  return (
    // Remember -- props becomes an object containing all of the keys and values passed in from the parent component
    <button onClick={props.click}>{props.text}</button>
  );
}


function App() {
  const arr = ["Learn React","go to the park", "not die","climb mt everest", "feed the dog", "run a marathon"];
  // We can define the click event handler function here so that the event is fired in this component 
  // instead of the child component.
  const clickHandler = () => {console.log("Clicked");}
  // The text for the button will also come from this component
  const buttonOneText = "I am the first button being clicked";
  const buttonTwoText = "And I am the second button being clicked";
  return (
    <div className="App">
      <Header first="Lia" last="McClane"></Header>
      <Header first="Lia" last={607}></Header>
      {/* <Header first = "Lia" last = 607></Header> // numbers need braces */}
      <button className="color-me" onClick={() => console.log("Believe it or not... I clicked this")}>Click Me</button>
      <Button text={buttonOneText} click={clickHandler} />
      <Button text={buttonTwoText} click={clickHandler} />
      <MyNewComponent />
      <hr/>
      <MyNewComponent someProp="Something cool here">
        <p>This is a child</p>
        <p>This is another child</p>
        <p>this is another another child</p>
      </MyNewComponent>
      <hr/>
      <Boring stuffs={arr} />

    </div>
  );
}

export default App;

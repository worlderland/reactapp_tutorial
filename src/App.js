import logo from './logo.svg';
import './App.css';

function App() {
  var i = 2;
  var myStyle = {
    fontSize: 100,
    color: 'red'

  }
  return (
    <div>
      <h1 style = {myStyle}>Header</h1> {/*This is a comment*/}
      <h2>Content</h2>
      <p data-mayattribute = "somevalue">This is the content!!!</p>
      <h3>{1+1}</h3>
      <h4>{i == 1 ? 'True' : 'False'}</h4>
      
      {/*End of block comment*/}
    </div>
  );
}

export default App;

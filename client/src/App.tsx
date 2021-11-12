import './App.css';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div className="App">
      <UserComponent user={{name: "Jackson", age: 21}}/>
    </div>
  );
}

export default App;

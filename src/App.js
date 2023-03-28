import './App.css'
import Header from './Components/Header/Header';
import UserInfo from './UserInfo/UserInfo';


function App() {
  return (
    <div className="App">
      <stack direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={0.5}>
        <Header/>
      </stack>
      
      <UserInfo/>

    </div>
  );
}

export default App;
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header';
function App() {
  //going to create a state
  const[meanings, setMeanings] = useState([]); //meanings is a state
  //creating another state for the word
  const[word, setWord] = useState('');

  //create async func to get data using axios
  const dictionaryApi = async () => {
    try{
      const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/plane');
      setMeanings(data.data);
    } catch(e) {
      console.log(e);
    }
    console.log(meanings);
  };
  //this will call the get function once the component loads
  useEffect(() => {
    dictionaryApi();
  },[]);
  return (
    <div className="App">
      <Container maxWidth='md' style={ {display: "flex", flexDirection: "column", height: "100vh"}}>
      <Header/>
      </Container>
    </div>
  );
}

export default App;

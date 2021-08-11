import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';
function App() {
  //going to create a state
  const [meanings, setMeanings] = useState([]); //meanings is a state
  //creating another state for the word
  const [word, setWord] = useState('');
  //create a state for category
  const [category, setCategory] = useState('en');
  //create async func to get data using axios
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      setMeanings(data.data);
    } catch (e) {
      console.log(e);
    }
    console.log(meanings);
  };
  //this will call the get function once the component loads
  useEffect(() => {
    const timer = setTimeout(() => {
      dictionaryApi();
    }, 500);
    return () => clearTimeout(timer);
  }, [word, category]);
  return (
    <div className="App">
      <Container maxWidth='md' style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} />
        {meanings && (<Definitions word={word} meanings={meanings} category={category} />)}
      </Container>
    </div>
  );
}
//above pass in cateogry and set category as a prop to header
export default App;

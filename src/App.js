import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Character from './components/Character';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charactersData, setCharactersData] = useState([]);
  const [currentURL, setCurrentURL] = useState(null);

  const openDetails = url => {
    setCurrentURL(url)
  }

  const closeDetails = () => {
    setCurrentURL(null)
  }

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      setCharactersData(res.data);
    }).catch(err => console.log(err));
  }, [])

  const CharDetail = props => (
    <div>
      {props.info.name}
    <button onClick={() => openDetails(props.info.url)}>
      INFO
    </button>
    </div>
  )

  return (
    <div className="App">
      <Header />
      <StyledCharacters className='huh'>
        {charactersData.map( char => {
          return <CharDetail key={char.url} info={char}/>
        })
        }
      </StyledCharacters>
      {
        currentURL && <Character currentURL={currentURL} close={closeDetails} />
      }
    </div>
  );
}

export default App;

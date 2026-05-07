import { useEffect } from 'react';
import { useState } from 'react';
import CardWrapper from './components/CardWrapper';

const apiUrl = 'https://lanciweb.github.io/demo/api/actresses/';


function App() {
  const [actressesList, setActressesList] = useState([])

  useEffect(() => {
    fetch(apiUrl)
    .then(resp => {
      return resp.json()
    }).then(json => { //dentro abbiamo il nostro array
      console.log(json);
      setActressesList(json)
    })

  }, []) //array dipendenze vuoto perchè deve fare la fetch solo al mount


  return <>
    <CardWrapper lista={actressesList}/>
  </>
  
  ;
}

export default App

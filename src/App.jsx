import { useEffect } from 'react';
import { useState } from 'react';

const apiUrl = 'https://lanciweb.github.io/demo/api/actresses/';


function App() {
  useEffect(() => {
    fetch(apiUrl)
    .then(resp => {
      return resp.json()
    }).then(json => { //dentro abbiamo il nostro array
      console.log(json); 
    })

  }, []) //array dipendenze vuoto perchè deve fare la fetch solo al mount


  return <button className='btn btn-primary'>click</button>;
}

export default App

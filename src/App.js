import React, { useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import db from './firebase/FirebaseConfig'

const App = () => {

  useEffect(() => {

    const obtenerdatos = async() => {
      const datos = await getDocs(collection(db, 'usuarios'));
      datos.forEach(documento => {
        console.log(documento.data());
      });
    }
    obtenerdatos();
  }, []);


  return (
    <div>Holas desde fire base</div>
  )
}

export default App
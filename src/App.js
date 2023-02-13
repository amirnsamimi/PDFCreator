
import './App.scss';
import Doc from './docComp';
import { Font, PDFDownloadLink } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';



 function App() {



  const savePdf = () => {
    setTimeout(()=>{
      document.getElementById("download").click();
    },1000) 
  }

  useEffect(()=>{
    savePdf();
  },[]);

  return (
    
//     <PDFDownloadLink document={<Doc />} fileName="hello">

// <button  id="download"> dl </button>

<Doc />
// </PDFDownloadLink>
   
  );
  
}

export default App;

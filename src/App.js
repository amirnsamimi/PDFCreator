import logo from './logo.svg';
import './App.scss';
import DocComp from './docComp';
import { PDFDownloadLink } from '@react-pdf/renderer';
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
    
    <PDFDownloadLink document={<DocComp />} fileName="hello">

<button  id="download"> </button>
<DocComp />
      
</PDFDownloadLink>
   
  );
  
}

export default App;

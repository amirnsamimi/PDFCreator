
import './App.scss';
import Doc from './docComp';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Fragment, useEffect, useState } from 'react';
import Customer from './customer.data';
import { click } from '@testing-library/user-event/dist/click';



 function App() {


  var className1;

  function clickingFunc(){

  document.querySelector(`#${className1}`).click();


  document.querySelector(`#${className1}`).window.alert("nriuh.jkl");

  }
  clickingFunc()
  return (
    
<Fragment>

    { Customer.map((data,index) => {

      className1 = data.name+index;

    

      return(


   <PDFDownloadLink  document={  <Doc  name={data.name} lastName={data.lastName} index={index} />} fileName="hello">

      <button id={`${data.name+index}`} className='hi' > hello </button>
        { className1 === undefined || null ? console.log(className1) : clickingFunc()}
   </PDFDownloadLink>
   
 )
} )}
  
   
 </Fragment>
  );
  
}

export default App;

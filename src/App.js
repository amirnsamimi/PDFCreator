
import './App.scss';
import Doc from './docComp';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { Fragment, useEffect, useState } from 'react';
import Customer from './customer.data';
import { click } from '@testing-library/user-event/dist/click';



 function App() {


var indexT;

function save(){

  for(let i =  0; i <= indexT; i++ ){
    document.querySelector(`#button${i}`).click();
    console.log("hi")
  }
}



  return (
    
<Fragment>

    { Customer.map((data,index) => {

      indexT = index;
     
      
      return(

   <PDFDownloadLink  width="100%" height="500px" key={`${data.name+index}`}  className='button'  document={  <Doc  name={data.name} lastName={data.lastName} index={index} />} fileName={`${data.name}_${data.lastName}`}>
 
  <button id={`button${index}`}>  D L   </button>

   </PDFDownloadLink>
   


)

 
} )}

<button onClick={save} >asdasda</button>

 </Fragment>
  );
  
}

export default App;

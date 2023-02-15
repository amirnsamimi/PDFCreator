
import './App.scss';
import Doc from './docComp';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { Fragment, useEffect, useState } from 'react';
import Customer from './customer.data';
import { click } from '@testing-library/user-event/dist/click';



 function App() {


let x = 0;
let indexX = 9;
let indexT;



 function save(){

  console.log(indexX)
  console.log(x)

  for(let i = x; i <= indexX; i++ ){
    document.querySelector(`#button${i}`).click();
    console.log("hi");
    if(i === indexX){  add() }
    
  }

 

}

function add(){
  setTimeout(()=>{
    if( indexX < indexT ){
    x = x + 10;
    indexX = indexX + 10;
    save()
    }
  },5000)
}



  return (
    
<Fragment>

    { Customer.map((data,index) => {

      indexT = index;
      
      return(

   <PDFDownloadLink  width="100%" height="500px" key={`${data.name+index}`}  className='button'  document={  <Doc  name={data.name} lastName={data.lastName} index={index} />} fileName={`${data.name}_${data.lastName}`}>
 
  <button id={`button${index}`} style={{display:"none"}}>   </button>

   </PDFDownloadLink>
   


)

 
} )}

<button onClick={save} >Start Downloading</button>

 </Fragment>
  );
  
}

export default App;

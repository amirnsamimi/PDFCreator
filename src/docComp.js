import { Stack  } from '@mui/material';
import { Page, Text, View, Document, StyleSheet, PDFRenderer, PDFViewer, Image } from '@react-pdf/renderer';
import { Fragment } from 'react';
import Customer from './customer.data';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Logo from "./invitation.jpg";
import { Font } from '@react-pdf/renderer'

 const DocComp = () =>{



  // Register font
  Font.register({ family: 'op-bold', src:  "./font/Opificio_bold.ttf" });
  Font.register({ family: 'op-bold', src:  "./font/Opificio_bold.ttf" });


    return(
<Fragment>
<Document>
<Page>
        {Customer.map((data,index)=>{ 


          
return(
  <Fragment>
          {/* <Grid2 sx={{fontFamily:"op-reg"}} container>
          <Grid2 p={4} className="gridLeft" xs={6}>
          <Stack spacing={5}> */}
            <Image
        style={{width:"100%"}}
        source="./invitation.jpg"
        alt="logo"
      />
          {/* </Stack>

        </Grid2>
        <Grid2 className="gridRight" p={8} xs={6}>
          <Stack spacing={16}>

            <Stack>*/}
            <Text style={{fontFamily:"op-reg"}}>
            Dear Mr/Mrs/Ms
            </Text>
            <br />
           {/* </Stack>
            <Stack key={index} sx={{fontFamily:"op-bold"}}> */}
            <Text style={{fontFamily:"op-bold"}}>
              {data.name} {data.lastName}
              </Text>
            {/* </Stack>
            <Stack>*/}
            <br />
            <Text style={{fontFamily:"op-reg"}}>

            We are inviting you to join our <br />
virtual private online store<br />
on instagram for our chosen 
<br/>loyal customers
</Text>
<br />
          { /*  </Stack>
            <Stack> */}
            <Text style={{fontFamily:"op-bold"}}>

              <a href="https://instagram.com/limooPrivate"  style={{color:"white",textDecoration:"none", fontFamily:"op-bold"}}> for joining us click here </a>
              </Text>
              <br />
           {/* </Stack>
            <Stack sx={{fontSize:"9px", fontWeight:"100"}}> */}
            <Text style={{fontFamily:"op-reg"}}>

            Join us as we launch new products and give away discounts and gifts on pre-orders <br/>
products will be available before Eid-Norouz
</Text>

          {/*  </Stack>
       
          </Stack>

        </Grid2>


      </Grid2> */}

</Fragment>
)

        })}
        </Page>
        </Document>
    
</Fragment>

    );


};
export default DocComp;
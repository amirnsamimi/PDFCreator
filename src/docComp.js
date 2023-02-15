import { Page, Text, Document, Image, StyleSheet, PDFViewer, View, Link } from '@react-pdf/renderer';
import Customer from './customer.data';
import { Font } from '@react-pdf/renderer'
import  logo  from "./invitation.jpg"
import { Grid } from '@mui/material';
import { fontFamily, style } from '@mui/system';
import OpReg from './font/Opificio_light.ttf';
import OpBold from './font/Opificio_Bold.ttf';
import App from './App';


Font.register({ family: 'opreg', src: OpReg });
Font.register({ family: 'opbold', src: OpBold });


 const Doc = (props) => {

  const styles = StyleSheet.create({
    body: { position:"relative" ,fontFamily: 'opreg', fontSize:"12",  },
    title: {  fontFamily: 'opbold', fontSize:"16", marginTop:50, marginBottom:50 },
    text: { color: 'white', textAlign: 'center'},
    paragraph: { color: 'white', textAlign: 'center', margin:2.5, letterSpacing:2},
    image: { position:"absolute", width:"500", textAlign:"left" },
    inv:{ position:"absolute", width:"500", textAlign:"center", left:"500", backgroundColor:"#2f2f2f", height:"100%", color:"white", padding:50},
    link:{  color:"white",  textAlign:"center", margin:75, padding:0, textDecoration:"none", fontFamily:'opbold',fontSize:14},
    paragraphSmall:{ color: 'white', textAlign: 'center', marginTop:2.5, letterSpacing:1, fontSize:8,}
  });

    return(

     

  <Document  style={styles.body} pageMode="singlePage">

  <Page  break size={[510,1000]}  orientation='landscape'>
<div      style={styles.image} >
<Image
   src={logo}
   alt="logo"

 ></Image>
 </div>
 
 <div  style={styles.inv}>

 <Text style={styles.text}>
            Dear Mr/Mrs/Ms
            </Text>
            <br />
  <Text  
  style={styles.title}
  key={props.name+props.index}
  > {props.name} {props.lastName} </Text>
    <Text style={styles.paragraph}>

We are inviting you to join our 
</Text>
<Text style={styles.paragraph}>
virtual private online store
</Text>
<Text style={styles.paragraph}>
on instagram for our chosen 
</Text>
<Text style={styles.paragraph}>
loyal customers
</Text>


         
              <Link style={styles.link} src="https://instagram.com/limooshirin"><Text style={styles.paragraph}>for joining us click here</Text></Link>
         
              <Text style={styles.paragraphSmall}>

Join us as we launch new products and give away discounts and gifts
</Text>
<Text style={styles.paragraphSmall}>
on pre-orders, products will be available before Eid-Norouz
</Text>

</div>
      
     </Page>

      </Document>





    );


};
export default Doc;
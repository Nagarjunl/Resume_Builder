import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // updated

import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,Svg,
  Line
  
} from "@react-pdf/renderer";

const BORDER_COLOR = "#bfbfbf";
const BORDER_STYLE = "solid";
const COL1_WIDTH = 10;
const COLN_WIDTH = (100 - COL1_WIDTH) / 4;
Font.register({
  family: "Noto Sans Tamil",
  src: "https://fonts.gstatic.com/ea/notosanstamil/v3/NotoSansTamil-Regular.ttf",
});

const styles = StyleSheet.create({
  centerText: {
    textAlign: "center",
  },
  rightText: {
    textAlign: "right",
  },
  dFlex:{
    display:"flex",
    flexDirection:"row"
  },
  dFlexC:{
    display:"flex",
    flexDirection:"column"
  },
  dFlexSB:{
    display:"flex",
    flexDirection:"row",
   justifyContent:"space-between"
  },
  dFlexSA:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  header2:{
    fontSize:16,
  },
  marginTop10:{
    marginTop:10
  },
  marginTop20:{
    marginTop:20
  },
  marginTop3:{
    marginTop:3
  },
  marginTop6:{
    marginTop:6
  },
  width70:{
    width:"30%"
  },
  colorGrey:{
    color:"#595959",
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontSize: 12,
    fontFamily: "Noto Sans Tamil",
    color: "#000",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderTopWidth: 10,
    borderRightWidth: 10,
    borderLeftWidth: 10,
    borderBottomWidth: 10,
  },
  
 
  clientName:{
    fontSize:18,
  },

  clientAdress:{
    marginTop:5,
    color:"#595959",
  },

  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});
const PdfBill = () => {
   
  return (
 
    <PDFViewer height="700px" width="100%">
      <Document size="A4" title="withdraw.pdf">
        <Page style={styles.body}>

          {/* header Section */}
          <View >
            <Text style={[styles.clientName,styles.centerText]} > 
               Dinesh Kumaran,  React Developer
            </Text>
            <Text style={[styles.clientAdress,styles.centerText]} > 
               ottakuthur Street, Theni, Tamilnadu, India, 9360572364, dineshguvara.com 
            </Text>           
          </View>

          {/* Summary Section  */}
          <View style={styles.marginTop20}>
            <Text  style={[styles.header2,styles.centerText]}>
            Profile  Summary
            </Text>
          <View> 
            <Svg height="5" width="495">
              <Line x1="0" y1="5" x2="500" y2="5" strokeWidth={2} stroke="rgb(0,0,0)" />
            </Svg>
          </View>
            <Text  style={[styles.marginTop10,styles.colorGrey]}>
            It is a long established fact that a reader will be distracted by the readable content of a page 
            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
            normal distribution of letters, as opposed to using 'Content here, content here',
            making it look like readable English. Many desktop publishing packages and web page editors 
            now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
              many web sites still in their infancy. Various versions have evolved over the years, 
            sometimes by accident, sometimes on purpose (injected humour and the like).
            </Text>
          </View>

          {/* Skill Section  */}
          <View >
            <Text  style={[styles.header2,styles.centerText,styles.marginTop20]}>
              Skills
            </Text>
            <View> 
            <Svg height="5" width="495">
              <Line x1="0" y1="5" x2="500" y2="5" strokeWidth={2} stroke="rgb(0,0,0)" />
            </Svg>
            </View>
            <View style={[styles.dFlex,styles.marginTop10]}>            
              <Text  style={styles.colorGrey} >Business: </Text>  
              <Text> Budget - Business Analyst - Project Manager - Stakeholder Manager - Business Statergy  </Text>
            </View>
            <View style={[styles.dFlex,styles.marginTop10]}>            
              <Text  style={styles.colorGrey} >Technology: </Text>  
              <Text> Excel - VBA  - SQL  - QuickBooks - PowerBi - Tableau - Python  </Text>
            </View>           
          </View>

          {/* Experience Section  */}
          <View >
            <Text  style={[styles.header2,styles.centerText,styles.marginTop20]}>
              Experience 
            </Text>

            <View> 
            <Svg height="5" width="495">
              <Line x1="0" y1="5" x2="500" y2="5" strokeWidth={2} stroke="rgb(0,0,0)" />
            </Svg>
            </View>

              <View style={styles.marginTop10}>      
                <View style={[styles.dFlexSB,styles.marginTop3]} > 
                  <Text  style={styles.colorGrey} > Network Solution LLC </Text>  
                  <Text  style={styles.colorGrey} >  Details, Tx </Text>  
                </View>     
                <View style={[styles.dFlexSB,styles.marginTop3]} >            
                  <Text> Lead Business Analyst & Project Manager </Text>
                  <Text  style={styles.colorGrey} >   2019 - Ongoing </Text>  
                </View>
                <View style={[styles.colorGrey,styles.marginTop6 ]} >  
                  <Text>1. It is a long established fact that a reader will be distracted by the readable content of a page   </Text>
                  <Text>2.  long established fact that a reader will be distracted by the readable content of a page   </Text>
                  <Text>3.   reader will be distracted by the readable content of a page   </Text>
                </View>
              </View>

              <View style={styles.marginTop10}>      
                    
                <View style={[styles.dFlexSB,styles.marginTop3]} >            
                  <Text> Senior Business Analyst   </Text>
                  <Text  style={styles.colorGrey} >   2017 - 2019 </Text>  
                </View>
                <View style={[styles.colorGrey,styles.marginTop6 ]} >  
                  <Text>1. It is a long established fact that a reader will be distracted by the readable content of a page   </Text>
                  <Text>2.  long established fact that a reader will be distracted by the readable content of a page   </Text>
                </View>
              </View>

              <View style={styles.marginTop10}>      
                <View style={[styles.dFlexSB,styles.marginTop3]} > 
                  <Text  style={styles.colorGrey} >  Lauzon  </Text>  
                  <Text  style={styles.colorGrey} >  Details, Tx </Text>  
                </View>     
                <View style={[styles.dFlexSB,styles.marginTop3]} >            
                  <Text>  Business Analyst   </Text>
                  <Text  style={styles.colorGrey} >  2013 - 2017 </Text>  
                </View>
                <View style={[styles.colorGrey,styles.marginTop6 ]} >  
                  <Text>1. It is a long established fact that a reader will be distracted by the readable content of a page   </Text>
                  <Text>2. long established fact that a reader will be distracted by the readable content of a page   </Text>
                  <Text>3. reader will be distracted by the readable content of a page   </Text>
                </View>
              </View>
             
   
          </View>

          {/* Education Section  */}
          <View >
            <Text  style={[styles.header2,styles.centerText,styles.marginTop20]}>
              Education 
            </Text>

            <View> 
            <Svg height="5" width="495">
              <Line x1="0" y1="5" x2="500" y2="5" strokeWidth={2} stroke="rgb(0,0,0)" />
            </Svg>
            </View>

              <View style={styles.marginTop10}>      
                <View style={[styles.dFlexSB,styles.marginTop3]} > 
                  <Text  style={styles.colorGrey} > University of Wisconsin </Text>  
                  <Text  style={styles.colorGrey} > Wisconsin </Text>  
                </View>     
                <View style={[styles.dFlexSB,styles.marginTop3]} >            
                  <Text>  M.Sc in Finance  </Text>
                  <Text  style={styles.colorGrey} >  2012 - 2013 </Text>  
                </View>                
              </View> 

              <View style={styles.marginTop10}>     
              <View style={[styles.dFlexSB,styles.marginTop3]} > 
                  <Text  style={styles.colorGrey} > University of Wisconsin </Text>  
                  <Text  style={styles.colorGrey} > Wisconsin </Text>  
                </View>                       
                <View style={[styles.dFlexSB,styles.marginTop3]} >            
                  <Text>  BBA: Business, Supply Chain Management    </Text>
                  <Text  style={styles.colorGrey} >   2008 - 2012 </Text>  
                </View>
                
              </View>
 
             
   
          </View>

           {/* Course Section  */}
           <View >
            <Text  style={[styles.header2,styles.centerText,styles.marginTop20]}>
              Course & Certificate
            </Text>

            <View> 
            <Svg height="5" width="495">
              <Line x1="0" y1="5" x2="500" y2="5" strokeWidth={2} stroke="rgb(0,0,0)" />
            </Svg>
            </View>

            <View style={styles.marginTop10}>      
              <View style={[styles.dFlex,styles.marginTop6]} > 
                <Text  style={styles.colorGrey} >  PMI Professional  in Business Analysis (PBA) </Text>   
                <Text>---- PMI </Text>                
                <Text  style={styles.colorGrey} >, 2019 </Text>                  
              </View> 
              <View style={[styles.dFlex,styles.marginTop6]} > 
                <Text  style={styles.colorGrey} >  Certified Associate in Project Management (CAPM) </Text>   
                <Text>---- PMI </Text>                
                <Text  style={styles.colorGrey} >, 2018 </Text>                  
              </View> 
              <View style={[styles.dFlex,styles.marginTop6]} > 
                <Text  style={styles.colorGrey} >  High Dimensional Data Analysis  </Text>   
                <Text>---- Harvard </Text>                
                <Text  style={styles.colorGrey} >, 2017 </Text>                  
              </View>                                       
            </View>    
          </View>

           {/* Interest & Hobbies Section  */}
           <View >
            <Text  style={[styles.header2,styles.centerText,styles.marginTop20]}>
              Interest & Hobbies
            </Text>

            <View> 
            <Svg height="5" width="495">
              <Line x1="0" y1="5" x2="500" y2="5" strokeWidth={2} stroke="rgb(0,0,0)" />
            </Svg>
            </View>

            <View style={styles.marginTop10}>      
              <View style={[styles.dFlexSA,styles.marginTop6]} > 
                <View style={styles.dFlexC}>
                  <Text>Giving Back To My Community </Text>
                  <Text style={[styles.colorGrey,styles.width70]}>it look like readable English. Various versions have evolved over the years, </Text>
                </View>
                <View style={styles.dFlexC}>
                  <Text> Horse - Riding  </Text>
                  <Text style={[styles.colorGrey,styles.width70]}> Various versions have evolved over the years, </Text>
                </View>
                <View style={styles.dFlexC}>
                  <Text> Developing My Team</Text>
                  <Text style={[styles.colorGrey,styles.width70]}> as opposed to using 'Content here, content here', </Text>
                </View>
              </View>                                                     
            </View>    
          </View>
            
         
          <View>
            {/* <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
              fixed
            /> */}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
export default PdfBill;
"use client";

import { Font, PDFViewer, StyleSheet } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";


Font.register({ family: 'Roboto', src: "/fonts/Roboto-VariableFont_wdth,wght.ttf" });
Font.register({ family: 'Title', src: "/fonts/Poppins-Bold.ttf" });


const styles = StyleSheet.create({
  container: {
  fontFamily: "Roboto",
  backgroundColor: "#f7f2ee"
  },
  });

const PDFDocument = () => (
  <div className="w-full h-[100vh]">
    <PDFViewer width="100%" height="100%" style={styles.container}>
      <MyDocument/>
    </PDFViewer>
  </div>
);

export default PDFDocument;

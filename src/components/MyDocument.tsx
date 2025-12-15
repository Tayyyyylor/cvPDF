import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";
import Me from "./sections/Me";
import LeftSide from "./sides/LeftSide";
import RightSide from "./sides/RightSide";


const styles = StyleSheet.create({
  page: {
    padding: 30
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
  },
  separator: {
    width: 1,
    backgroundColor: "#02326e",
    marginHorizontal: 8,
  }
  });


const MyDocument = () => {
  const lang = "en"
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Me lang={lang}/>
        <View style={styles.container}>
          <LeftSide lang={lang}/>
          <View style={styles.separator} />
          <RightSide lang={lang}/>
        </View>
      </Page>
    </Document>
  )};

  export default MyDocument
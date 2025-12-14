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


const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Me />
        <View style={styles.container}>
          <LeftSide />
          <View style={styles.separator} />
          <RightSide />
        </View>
      </Page>
    </Document>
  );

  export default MyDocument
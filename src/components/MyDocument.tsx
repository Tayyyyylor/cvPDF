import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";
import Me from "./sections/Me";
import LeftSide from "./sides/LeftSide";
import RightSide from "./sides/RightSide";


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
  },
  separator: {
    width: 1,
    backgroundColor: "#6aadf1", // ou autre couleur
    marginHorizontal: 8,
  }
  });


const MyDocument = () => (
    <Document>
      <Page size="A4">
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
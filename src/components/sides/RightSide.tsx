import { StyleSheet, View } from "@react-pdf/renderer";
import type { CvContent } from "@/content/cv";
import Professional from "../sections/Professional";
import Projects from "../sections/Projects";
import School from "../sections/School";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
});

const RightSide = ({ t }: { t: CvContent }) => (
  <View style={styles.container}>
    <Professional t={t} />
    <Projects t={t} />
    <School t={t} />
  </View>
);

export default RightSide;

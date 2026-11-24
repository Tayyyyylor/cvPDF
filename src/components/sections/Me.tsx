import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { identity, type CvContent } from "@/content/cv";
import { colors, Rich } from "../pdf-ui";

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  name: {
    fontSize: 26,
    lineHeight: 1.15,
    fontWeight: "bold",
    color: colors.accent,
  },
  job: {
    fontSize: 14,
    lineHeight: 1.2,
    fontWeight: "bold",
    color: colors.accent,
    marginTop: 2,
    marginBottom: 8,
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.45,
  },
});

const Me = ({ t }: { t: CvContent }) => (
  <View style={styles.container}>
    <Text style={styles.name}>
      {identity.firstName} {identity.lastName}
    </Text>
    <Text style={styles.job}>{t.job}</Text>
    <Rich style={styles.summary}>{t.summary}</Rich>
  </View>
);

export default Me;

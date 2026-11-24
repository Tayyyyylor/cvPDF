import { StyleSheet, Text, View } from "@react-pdf/renderer";
import type { CvContent } from "@/content/cv";
import { colors, SectionTitle } from "../pdf-ui";

const styles = StyleSheet.create({
  list: {
    gap: 8,
  },
  item: {
    gap: 2,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: 8,
  },
  diploma: {
    flex: 1,
    fontSize: 10.5,
    fontWeight: "bold",
    color: colors.accent,
  },
  date: {
    fontSize: 8.5,
    color: colors.muted,
  },
  details: {
    color: colors.muted,
  },
});

const School = ({ t }: { t: CvContent }) => (
  <View>
    <SectionTitle>{t.labels.education}</SectionTitle>
    <View style={styles.list}>
      {t.education.map((school, index) => (
        <View key={index} style={styles.item} wrap={false}>
          <View style={styles.heading}>
            <Text style={styles.diploma}>{school.diploma}</Text>
            <Text style={styles.date}>{school.date}</Text>
          </View>
          <Text>{school.level}</Text>
          <Text style={styles.details}>{school.school}</Text>
        </View>
      ))}
    </View>
  </View>
);

export default School;

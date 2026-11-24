import { StyleSheet, View } from "@react-pdf/renderer";
import type { Education } from "@/content/cv";
import { colors, Rich, SectionTitle } from "../pdf-ui";

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

type Props = {
  t: { labels: { education: string }; education: Education[] };
};

const School = ({ t }: Props) => (
  <View>
    <SectionTitle>{t.labels.education}</SectionTitle>
    <View style={styles.list}>
      {t.education.map((school, index) => (
        <View key={index} style={styles.item} wrap={false}>
          <View style={styles.heading}>
            <Rich style={styles.diploma}>{school.diploma}</Rich>
            <Rich style={styles.date}>{school.date}</Rich>
          </View>
          {school.level && <Rich>{school.level}</Rich>}
          <Rich style={styles.details}>{school.school}</Rich>
        </View>
      ))}
    </View>
  </View>
);

export default School;

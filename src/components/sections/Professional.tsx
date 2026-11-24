import { StyleSheet, View } from "@react-pdf/renderer";
import type { Experience } from "@/content/cv";
import { Bullets, colors, Labelled, Rich, SectionTitle } from "../pdf-ui";

const styles = StyleSheet.create({
  list: {
    gap: 11,
  },
  item: {
    gap: 3,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: 8,
  },
  title: {
    flex: 1,
    fontSize: 11,
    fontWeight: "bold",
    color: colors.accent,
  },
  date: {
    fontSize: 8.5,
    color: colors.muted,
  },
  company: {
    fontWeight: "bold",
  },
  context: {
    fontSize: 8.5,
    color: colors.muted,
    marginBottom: 1,
  },
});

type Props = {
  t: { labels: { experience: string; stack: string }; experiences: Experience[] };
};

const Professional = ({ t }: Props) => (
  <View>
    <SectionTitle>{t.labels.experience}</SectionTitle>
    <View style={styles.list}>
      {t.experiences.map((job, index) => (
        <View key={index} style={styles.item}>
          <View style={styles.heading}>
            <Rich style={styles.title}>{job.title}</Rich>
            <Rich style={styles.date}>{job.date}</Rich>
          </View>
          <Rich style={styles.company}>{job.company}</Rich>
          {job.context && <Rich style={styles.context}>{job.context}</Rich>}
          <Bullets items={job.bullets} />
          {job.stack && <Labelled label={t.labels.stack} value={job.stack} />}
        </View>
      ))}
    </View>
  </View>
);

export default Professional;

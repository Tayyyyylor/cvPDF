import { Link, StyleSheet, View } from "@react-pdf/renderer";
import type { CvContent } from "@/content/cv";
import { colors, Labelled, Rich, SectionTitle } from "../pdf-ui";

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
  name: {
    flex: 1,
    fontSize: 10.5,
    fontWeight: "bold",
    color: colors.accent,
  },
  link: {
    fontSize: 8.5,
    color: colors.accent,
    textDecoration: "none",
  },
});

const Projects = ({ t }: { t: CvContent }) => (
  <View>
    <SectionTitle>{t.labels.projects}</SectionTitle>
    <View style={styles.list}>
      {t.projects.map((project, index) => (
        <View key={index} style={styles.item} wrap={false}>
          <View style={styles.heading}>
            <Rich style={styles.name}>{project.name}</Rich>
            {project.link && (
              <Link src={project.link.href} style={styles.link}>
                <Rich>{project.link.label}</Rich>
              </Link>
            )}
          </View>
          <Rich>{project.description}</Rich>
          <Labelled label={t.labels.stack} value={project.stack} />
        </View>
      ))}
    </View>
  </View>
);

export default Projects;

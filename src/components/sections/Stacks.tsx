import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { skills, type CvContent, type Skill } from "@/content/cv";
import { colors, Icon, Rich, SectionTitle } from "../pdf-ui";

const ICON_SIZE = 10;
// Au-delà, le nom ne tient pas dans une demi-colonne : il prend toute la ligne.
const WIDE_NAME_LENGTH = 15;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: colors.accent,
    marginBottom: 5,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 4,
  },
  item: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingRight: 4,
  },
  wide: {
    width: "100%",
  },
  noIcon: {
    width: ICON_SIZE,
  },
  group: {
    marginBottom: 10,
  },
});

const SkillGrid = ({ title, items }: { title: string; items: Skill[] }) => (
  <View style={styles.group}>
    <Text style={styles.subtitle}>{title}</Text>
    <View style={styles.grid}>
      {items.map((skill, index) => (
        <View key={index} style={[styles.item, skill.name.length >= WIDE_NAME_LENGTH ? styles.wide : {}]}>
          {skill.icon ? <Icon name={skill.icon} size={ICON_SIZE} /> : <View style={styles.noIcon} />}
          <Rich>{skill.name}</Rich>
        </View>
      ))}
    </View>
  </View>
);

const Stacks = ({ t }: { t: CvContent }) => (
  <View>
    <SectionTitle>{t.labels.skills}</SectionTitle>
    <SkillGrid title={t.labels.mainStack} items={skills.main} />
    <SkillGrid title={t.labels.tools} items={skills.tools} />
  </View>
);

export default Stacks;

import { StyleSheet, Text, View } from "@react-pdf/renderer";
import type { CvContent } from "@/content/cv";
import { colors, Rich, SectionTitle } from "../pdf-ui";

const styles = StyleSheet.create({
  list: {
    gap: 3,
  },
  name: {
    fontWeight: "bold",
  },
  level: {
    color: colors.muted,
  },
});

const Languages = ({ t }: { t: CvContent }) => (
  <View>
    <SectionTitle>{t.labels.languages}</SectionTitle>
    <View style={styles.list}>
      {t.languages.map((language) => (
        <Text key={language.name}>
          <Text style={styles.name}>{language.name}</Text>
          {" – "}
          <Rich style={styles.level}>{language.level}</Rich>
        </Text>
      ))}
    </View>
  </View>
);

export default Languages;

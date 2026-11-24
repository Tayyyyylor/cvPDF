import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";
import { content, identity, skills, type Lang } from "@/content/cv";
import { colors, isPlaceholder } from "./pdf-ui";
import Me from "./sections/Me";
import LeftSide from "./sides/LeftSide";
import RightSide from "./sides/RightSide";

const styles = StyleSheet.create({
  page: {
    paddingVertical: 32,
    paddingHorizontal: 34,
    fontSize: 9.5,
    lineHeight: 1.35,
    color: colors.text,
  },
  columns: {
    flexDirection: "row",
    flexGrow: 1,
  },
  separator: {
    width: 1,
    backgroundColor: colors.rule,
    marginHorizontal: 16,
  },
});

const keywords = [...skills.main, ...skills.tools]
  .map((skill) => skill.name)
  .filter((name) => !isPlaceholder(name))
  .join(", ");

const MyDocument = ({ lang }: { lang: Lang }) => {
  const t = content[lang];
  const fullName = `${identity.firstName} ${identity.lastName}`;

  return (
    <Document
      title={t.documentTitle}
      author={fullName}
      subject={t.job}
      keywords={keywords}
      creator={fullName}
      producer={fullName}
      language={lang}
    >
      <Page size="A4" style={styles.page}>
        <Me t={t} />
        <View style={styles.columns}>
          <LeftSide t={t} />
          <View style={styles.separator} />
          <RightSide t={t} />
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;

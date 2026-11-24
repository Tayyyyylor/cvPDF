import { Document, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { identity } from "@/content/cv";
import { polyvalentCv as t } from "@/content/cv-polyvalent";
import { Bullets, colors, Rich, SectionTitle } from "./pdf-ui";
import Languages from "./sections/Languages";
import Professional from "./sections/Professional";
import School from "./sections/School";

const styles = StyleSheet.create({
  page: {
    paddingVertical: 32,
    paddingHorizontal: 34,
    fontSize: 9.5,
    lineHeight: 1.35,
    color: colors.text,
  },
  header: {
    marginBottom: 18,
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
  },
  domains: {
    fontSize: 10.5,
    fontWeight: "bold",
    color: colors.muted,
    marginTop: 3,
    marginBottom: 8,
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.45,
  },
  columns: {
    flexDirection: "row",
    flexGrow: 1,
  },
  left: {
    width: 178,
    gap: 16,
  },
  separator: {
    width: 1,
    backgroundColor: colors.rule,
    marginHorizontal: 16,
  },
  right: {
    flex: 1,
    gap: 16,
  },
  contactList: {
    gap: 3,
  },
  link: {
    color: colors.accent,
    textDecoration: "none",
  },
});

const fullName = `${identity.firstName} ${identity.lastName}`;

const PolyvalentDocument = () => (
  <Document title={t.documentTitle} author={fullName} subject={t.job} creator={fullName} producer={fullName} language="fr">
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{fullName}</Text>
        <Rich style={styles.job}>{t.job}</Rich>
        <Text style={styles.domains}>{t.domains}</Text>
        <Rich style={styles.summary}>{t.summary}</Rich>
      </View>
      <View style={styles.columns}>
        <View style={styles.left}>
          <View>
            <SectionTitle>{t.labels.contact}</SectionTitle>
            <View style={styles.contactList}>
              <Rich>{t.location}</Rich>
              <Link src={identity.phoneHref} style={styles.link}>
                <Text>{t.phone}</Text>
              </Link>
              <Link src={identity.email.href} style={styles.link}>
                <Text>{identity.email.label}</Text>
              </Link>
            </View>
          </View>
          <View>
            <SectionTitle>{t.labels.availability}</SectionTitle>
            <Bullets items={t.availability} />
          </View>
          <View>
            <SectionTitle>{t.labels.strengths}</SectionTitle>
            <Bullets items={t.strengths} />
          </View>
          <Languages t={t} />
        </View>
        <View style={styles.separator} />
        <View style={styles.right}>
          <Professional t={t} />
          <School t={t} />
        </View>
      </View>
    </Page>
  </Document>
);

export default PolyvalentDocument;

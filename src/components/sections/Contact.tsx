import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import { identity, type CvContent } from "@/content/cv";
import { colors, Rich, SectionTitle } from "../pdf-ui";

const styles = StyleSheet.create({
  list: {
    gap: 3,
  },
  link: {
    color: colors.accent,
    textDecoration: "none",
  },
});

const Contact = ({ t }: { t: CvContent }) => {
  const links = [{ label: t.phone, href: identity.phoneHref }, identity.email, ...identity.links];

  return (
    <View>
      <SectionTitle>{t.labels.contact}</SectionTitle>
      <View style={styles.list}>
        <Rich>{t.location}</Rich>
        {links.map((link) => (
          <Link key={link.href} src={link.href} style={styles.link}>
            <Text>{link.label}</Text>
          </Link>
        ))}
      </View>
    </View>
  );
};

export default Contact;

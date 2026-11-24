import { Image, Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import { identity, type CvContent } from "@/content/cv";
import { colors } from "../pdf-ui";
import Contact from "../sections/Contact";
import Languages from "../sections/Languages";
import Stacks from "../sections/Stacks";

const styles = StyleSheet.create({
  container: {
    width: 178,
    gap: 16,
  },
  qr: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    textDecoration: "none",
  },
  qrImage: {
    width: 56,
    height: 56,
  },
  qrCaption: {
    flex: 1,
    fontSize: 8.5,
    color: colors.muted,
  },
});

const LeftSide = ({ t }: { t: CvContent }) => (
  <View style={styles.container}>
    <Contact t={t} />
    <Stacks t={t} />
    <Languages t={t} />
    <Link src={identity.links[0].href} style={styles.qr}>
      {/* eslint-disable-next-line jsx-a11y/alt-text -- react-pdf Image has no alt attribute */}
      <Image src={identity.qrCode} style={styles.qrImage} />
      <Text style={styles.qrCaption}>{t.labels.qrCaption}</Text>
    </Link>
  </View>
);

export default LeftSide;

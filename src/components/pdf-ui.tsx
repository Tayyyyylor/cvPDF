import { Path, StyleSheet, Svg, Text, View, type Styles } from "@react-pdf/renderer";
import { icons, type IconName } from "./icons";

export const colors = {
  accent: "#02326e",
  text: "#1f2933",
  muted: "#5b6573",
  rule: "#c9d3e0",
  placeholder: "#d9480f",
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontFamily: "Title",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 0.4,
    color: colors.accent,
    paddingBottom: 3,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.rule,
  },
  bullets: {
    gap: 2,
  },
  bulletRow: {
    flexDirection: "row",
  },
  bulletDot: {
    width: 9,
    color: colors.accent,
  },
  bulletText: {
    flex: 1,
  },
  placeholder: {
    color: colors.placeholder,
  },
  labelled: {
    fontSize: 8.5,
    color: colors.muted,
  },
  label: {
    fontWeight: "bold",
  },
});

type TextStyle = Styles[string] | Styles[string][];

const PLACEHOLDER_SPLIT = /(\[[^\]]+\])/;
const PLACEHOLDER_WHOLE = /^\[[^\]]+\]$/;

export const isPlaceholder = (value: string) => PLACEHOLDER_WHOLE.test(value);

/** Texte dont les passages entre crochets (placeholders) sont affichés en orange. */
export const Rich = ({ children, style }: { children: string; style?: TextStyle }) => (
  <Text style={style}>
    {children.split(PLACEHOLDER_SPLIT).map((part, index) =>
      isPlaceholder(part) ? (
        <Text key={index} style={styles.placeholder}>
          {part}
        </Text>
      ) : (
        part
      ),
    )}
  </Text>
);

export const SectionTitle = ({ children }: { children: string }) => (
  <Text style={styles.sectionTitle}>{children}</Text>
);

export const Bullets = ({ items }: { items: string[] }) => (
  <View style={styles.bullets}>
    {items.map((item, index) => (
      <View key={index} style={styles.bulletRow} wrap={false}>
        <Text style={styles.bulletDot}>•</Text>
        <Rich style={styles.bulletText}>{item}</Rich>
      </View>
    ))}
  </View>
);

/** Ligne du type « Stack : Next.js, TypeScript » (le libellé inclut sa ponctuation). */
export const Labelled = ({ label, value }: { label: string; value: string }) => (
  <Text style={styles.labelled}>
    <Text style={styles.label}>{label}</Text>
    <Rich>{value}</Rich>
  </Text>
);

export const Icon = ({ name, size = 10 }: { name: IconName; size?: number }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size}>
    <Path d={icons[name]} fill={colors.text} />
  </Svg>
);

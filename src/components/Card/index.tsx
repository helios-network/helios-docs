import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

export default function Card({ link }) {
  return (
    <Link to={link.to} className={styles.card}>
      <div className={styles.icon}>{link.icon}</div>
      <Heading as="h3" className={styles.cardTitle}>
        {link.label}
      </Heading>
      <p className={styles.cardDescription}>{link.description}</p>
    </Link>
  );
}

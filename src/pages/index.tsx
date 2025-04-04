import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import type { ReactNode } from "react";
import {
  FaBalanceScale,
  FaBook,
  FaCode,
  FaNewspaper,
  FaServer,
  FaUsers,
} from "react-icons/fa";
import Card from "../components/Card";
import styles from "./index.module.css";

const links = [
  {
    label: "Learn About Helios",
    to: "/docs/learn/intro/what-is-helios",
    description:
      "Helios is a next-generation blockchain designed for interchain automation, AI-powered smart contracts, and decentralized governance.",
    icon: <FaBook />,
  },
  {
    label: "Explore Insights & Articles",
    to: "/articles",
    description:
      "Blockchain has always promised decentralization, interoperability, and automation, yet most solutions were either too complex for widespread adoption or too fragmented to work at scale.",
    icon: <FaNewspaper />,
  },
  {
    label: "Run a Node & Stake Tokens",
    to: "/docs/build/running-a-node/system-requirements",
    description:
      "Operating a node allows participants to validate transactions, secure the network, and earn rewards.",
    icon: <FaServer />,
  },
  {
    label: "Build & Deploy on Helios",
    to: "/docs/innovate/building-with-helios/developing-dapps",
    description:
      "Helios provides a robust EVM-compatible and Cosmos SDK-based environment for developers to build decentralized applications (dApps) with enhanced interoperability, governance, and security features.",
    icon: <FaCode />,
  },
  {
    label: "Participate in Governance",
    to: "/docs/build/staking-governance/governance-proposals",
    description:
      "Helios features on-chain governance that allows validators and stakeholders to influence network parameters.",
    icon: <FaBalanceScale />,
  },
  {
    label: "Join the Helios Community",
    to: "https://discord.com/invite/AjpJnJxt5e",
    description: "Join our Discord server to discuss and ask questions with builders around the Helios ecosystem.",
    icon: <FaUsers />,
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.cardGrid}>
          {links.map((link, index) => (
            <Card key={index} link={link} />
          ))}
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome`}
      description="Helios Hub is your gateway to the future of blockchain. Learn, build, and innovate with AI-powered automation, cross-chain interoperability, and decentralized governance."
    >
      <HomepageHeader />
    </Layout>
  );
}

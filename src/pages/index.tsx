import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>

          <Link
            className="button button--secondary button--lg"
            to="/docs/learn/intro/what-is-helios">
            Learn About Helios
          </Link>

          <Link style={{ margin: "5px" }}
            className="button button--secondary button--lg"
            to="/articles">
            Explore Insights & Articles
          </Link>

          <Link style={{ margin: "5px" }}
            className="button button--secondary button--lg"
            to="/docs/build/running-a-node/system-requirements">
            Run a Node & Stake Tokens
          </Link>

          <Link style={{ margin: "5px" }}
            className="button button--secondary button--lg"
            to="/docs/innovate/building-with-helios/developing-dapps">
            Build & Deploy on Helios
          </Link>

          <Link style={{ margin: "5px" }}
            className="button button--secondary button--lg"
            to="/docs/build/staking-governance/governance-proposals">
            Participate in Governance
          </Link>

          <Link style={{ margin: "5px" }}
            className="button button--secondary button--lg"
            to="https://discord.com/invite/AjpJnJxt5e">
            Join the Helios Community
          </Link>

        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome`}
      description="Helios Hub is your gateway to the future of blockchain. Learn, build, and innovate with AI-powered automation, cross-chain interoperability, and decentralized governance.">
      <HomepageHeader />
    </Layout>
  );
}

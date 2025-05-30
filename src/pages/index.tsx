import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Heading from "@theme/Heading"
import Layout from "@theme/Layout"
import clsx from "clsx"
import type { ReactNode } from "react"
import Card from "../components/Card"
import styles from "./index.module.css"

const links = [
  {
    label: "Learn About Helios",
    to: "/docs/learn/intro/what-is-helios",
    description: "Helios is a next-generation blockchain designed for interchain automation, AI-powered smart contracts, and decentralized governance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
          <path d="M20.5 16.929V10c0-3.771 0-5.657-1.172-6.828S16.271 2 12.5 2h-1C7.729 2 5.843 2 4.672 3.172S3.5 6.229 3.5 10v9.5" />
          <path d="M20.5 17H6a2.5 2.5 0 0 0 0 5h14.5" />
          <path d="M20.5 22a2.5 2.5 0 0 1 0-5M15 7H9m3 4H9" />
        </g>
      </svg>
    ),
  },
  {
    label: "Explore Insights & Articles",
    to: "/articles",
    description: "Blockchain has always promised decentralization, interoperability, and automation, yet most solutions were either too complex for widespread adoption or too fragmented to work at scale.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
          <path d="M10.5 8h8m-8 4H13m5.5 0H16m-5.5 4H13m5.5 0H16M7 7.5H6c-1.886 0-2.828 0-3.414.586S2 9.614 2 11.5V18a2.5 2.5 0 0 0 5 0z" />
          <path d="M16 3.5h-5c-.93 0-1.395 0-1.776.102a3 3 0 0 0-2.122 2.122C7 6.105 7 6.57 7 7.5V18a2.5 2.5 0 0 1-2.5 2.5H16c2.828 0 4.243 0 5.121-.879C22 18.743 22 17.328 22 14.5v-5c0-2.828 0-4.243-.879-5.121C20.243 3.5 18.828 3.5 16 3.5" />
        </g>
      </svg>
    ),
  },
  {
    label: "Run a Node & Stake Tokens",
    to: "/docs/build/running-a-node/system-requirements",
    description: "Operating a node allows participants to validate transactions, secure the network, and earn rewards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M5 10.813h14c.99 0 1.54 0 2.06-.21c.67-.29 1.19-.81 1.48-1.49c.21-.5.21-1.06.21-2.05s0-1.54-.21-2.06c-.29-.67-.81-1.19-1.49-1.48c-.5-.21-1.05-.21-2.05-.21H5c-.99 0-1.54 0-2.06.21c-.67.29-1.19.81-1.48 1.49c-.21.5-.21 1.06-.21 2.05s0 1.54.21 2.06c.29.67.81 1.19 1.49 1.48c.5.21 1.05.21 2.05.21m0-6h14c.78 0 1.25 0 1.47.09c.31.13.55.37.68.67c.09.24.09.71.09 1.489v.001c0 .78 0 1.25-.09 1.47c-.13.31-.37.55-.67.68c-.24.09-.71.09-1.49.09h-14c-.78 0-1.25 0-1.47-.09c-.31-.13-.55-.37-.68-.67c-.09-.24-.09-.71-.09-1.49s0-1.25.09-1.47c.13-.31.37-.55.67-.68c.24-.09.71-.09 1.49-.09m0 16h14c.99 0 1.54 0 2.06-.21c.67-.29 1.19-.81 1.48-1.49c.21-.5.21-1.06.21-2.05s0-1.54-.21-2.06c-.29-.67-.81-1.19-1.49-1.48c-.5-.21-1.05-.21-2.05-.21H5c-.99 0-1.54 0-2.06.21c-.67.29-1.19.81-1.48 1.49c-.21.5-.21 1.06-.21 2.05s0 1.54.21 2.06c.29.67.81 1.19 1.49 1.48c.5.21 1.05.21 2.05.21m0-6h14c.78 0 1.25 0 1.47.09c.31.13.55.37.68.67c.09.24.09.71.09 1.489v.001c0 .78 0 1.25-.09 1.47c-.13.31-.37.55-.67.68c-.24.09-.71.09-1.49.09h-14c-.78 0-1.25 0-1.47-.09c-.31-.13-.55-.37-.68-.67c-.09-.24-.09-.71-.09-1.49s0-1.25.09-1.47c.13-.31.37-.55.67-.68c.24-.09.71-.09 1.49-.09m1.01 3.25c-.55 0-1-.45-1-1s.44-1 1-1c.55 0 1 .45 1 1s-.45 1-1 1m3-1c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1c-.56 0-1 .45-1 1m-3-9c-.55 0-1-.45-1-1s.44-1 1-1c.55 0 1 .45 1 1s-.45 1-1 1m3-1c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1c-.56 0-1 .45-1 1"
          color="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Build & Deploy on Helios",
    to: "/docs/innovate/building-with-helios/developing-dapps",
    description: "Helios provides a robust EVM-compatible and Cosmos SDK-based environment for developers to build decentralized applications (dApps) with enhanced interoperability, governance, and security features.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
          <circle cx="12" cy="12" r="10" />
          <path d="m16 10l1.227 1.057c.515.445.773.667.773.943s-.258.498-.773.943L16 14m-8-4l-1.227 1.057C6.258 11.502 6 11.724 6 12s.258.498.773.943L8 14m5-5l-2 6" />
        </g>
      </svg>
    ),
  },
  {
    label: "Participate in Governance",
    to: "/docs/build/staking-governance/governance-proposals",
    description: "Helios features on-chain governance that allows validators and stakeholders to influence network parameters.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M10.75 5.75a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m2 2.65c.92-.26 1.64-.98 1.9-1.9H20c.41 0 .75-.34.75-.75S20.41 5 20 5h-5.35c-.33-1.15-1.39-2-2.65-2s-2.32.85-2.65 2H4c-.41 0-.75.34-.75.75s.34.75.75.75h5.35c.26.92.98 1.64 1.9 1.9V21H7c-.41 0-.75.34-.75.75s.34.75.75.75h10c.41 0 .75-.34.75-.75S17.41 21 17 21h-4.25zm5.06.06A.74.74 0 0 1 18.5 8h1c.3 0 .58.18.69.46l2.5 6c.04.09.06.19.06.29c0 2.07-1.68 3.75-3.75 3.75s-3.75-1.68-3.75-3.75c0-.1.02-.2.06-.29zM19 9.5L17.12 14h3.76zm-2.12 6c.31.87 1.14 1.5 2.12 1.5s1.81-.63 2.12-1.5zM4.5 8c-.3 0-.58.18-.69.46l-2.5 6c-.04.09-.06.19-.06.29c0 2.07 1.68 3.75 3.75 3.75s3.75-1.68 3.75-3.75c0-.1-.02-.2-.06-.29l-2.5-6A.74.74 0 0 0 5.5 8zm-1.37 6L5 9.5L6.88 14zM5 17c-.98 0-1.81-.63-2.12-1.5h4.24C6.81 16.37 5.98 17 5 17"
          color="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Join the Helios Community",
    to: "https://discord.com/invite/AjpJnJxt5e",
    description: "Join our Discord server to discuss and ask questions with builders around the Helios ecosystem.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M20.774 18c.75 0 1.345-.471 1.88-1.13c1.096-1.35-.703-2.43-1.389-2.957c-.697-.537-1.476-.842-2.265-.913m-1-2a2.5 2.5 0 0 0 0-5M3.226 18c-.75 0-1.345-.471-1.88-1.13c-1.096-1.35.703-2.43 1.389-2.957C3.432 13.376 4.21 13.07 5 13m.5-2a2.5 2.5 0 0 1 0-5m2.584 9.111c-1.022.632-3.701 1.922-2.07 3.536C6.813 19.436 7.7 20 8.817 20h6.368c1.117 0 2.004-.564 2.801-1.353c1.632-1.614-1.047-2.904-2.069-3.536a7.46 7.46 0 0 0-7.832 0M15.5 7.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"
          color="currentColor"
        />
      </svg>
    ),
  },
]

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
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
  )
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`Welcome`} description="Helios Hub is your gateway to the future of blockchain. Learn, build, and innovate with AI-powered automation, cross-chain interoperability, and decentralized governance.">
      <HomepageHeader />
    </Layout>
  )
}

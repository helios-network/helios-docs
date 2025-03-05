import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// Correct Sidebar Definition
const sidebars: SidebarsConfig = {
  learnSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsible: true,
      collapsed: false,
      items: [
        'learn/intro/what-is-helios',
        'learn/intro/why-helios',
        'learn/intro/key-features',
        'learn/intro/use-cases',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        'learn/getting-started/overview',
        'learn/getting-started/setting-up-wallet',
        'learn/getting-started/connecting-to-network',
        'learn/getting-started/exploring-ecosystem',
      ],
    },
    {
      type: 'category',
      label: 'Helios Economics',
      collapsible: true,
      collapsed: false,
      items: [
        'learn/helios-economics/tokenomics-overview', 
        'learn/helios-economics/minting-inflation-mechanics',
        'learn/helios-economics/supply-reward-distribution',
        'learn/helios-economics/whale-limit-apy-adjustment',
        'learn/helios-economics/treasury-slashing-mechanisms',
      ],
    },
    {
      type: 'category',
      label: 'Helios Architecture',
      collapsible: true,
      collapsed: false,
      items: [
        'learn/architecture/overview', 
        'learn/architecture/system-design',
        'learn/architecture/consensus-iposr',
        'learn/architecture/security-scalability',
      ],
    },
  ],
  buildSidebar: [
    {
      type: "category",
      label: "Build",
      collapsible: true,
      collapsed: false,
      items: [
        {
          collapsible: true,
          collapsed: false,
          type: "category",
          label: "Running a Node",
          items: [
            "build/running-a-node/system-requirements",
            "build/running-a-node/installation",
            "build/running-a-node/configuration",
            "build/running-a-node/maintaining-upgrading",
          ],
        },
        {
          collapsible: true,
          collapsed: false,
          type: "category",
          label: "Staking & Governance",
          items: [
            "build/staking-governance/staking-mechanics",
            "build/staking-governance/becoming-validator",
            "build/staking-governance/governance-proposals",
            "build/staking-governance/rewards-penalties",
          ],
        },
        {
          collapsible: true,
          collapsed: false,
          type: "category",
          label: "Interchain Operations",
          items: [
            "build/interchain-operations/bridging-assets",
            "build/interchain-operations/hyperion-modules",
            "build/interchain-operations/cross-chain-transactions",
            "build/interchain-operations/interchain-governance",
          ],
        },
        
      ],
    },
  ],
  innovateSidebar: [
    {
      type: 'category',
      label: 'Innovate',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Inovating with Helios',
          items: [
            'innovate/building-with-helios/developing-dapps',
            'innovate/building-with-helios/evm-and-cosmos-apis',
            'innovate/building-with-helios/smart-contracts',
          ],
        },
        {
          collapsible: true,
          collapsed: false,
          type: 'category',
          label: 'Advanced Use Cases',
          items: [
            'innovate/advanced-use-cases/ai-and-llm',
            'innovate/advanced-use-cases/on-chain-etfs',
            'innovate/advanced-use-cases/oracle-defi-products',
          ],
        },
        {
          type: 'category',
          label: 'Helios Improvement Proposals (HIPs)',
          items: [
            'innovate/helios-improvement-proposals/community-upgrades',
            'innovate/helios-improvement-proposals/governance-process',
            'innovate/helios-improvement-proposals/tracking-and-submitting-hips',
          ],
        },
        {
          type: 'category',
          label: 'Helios Ecosystem & Grants',
          items: [
            'innovate/helios-ecosystem-and-grants/developer-incentives',
            'innovate/helios-ecosystem-and-grants/grant-programs',
          ],
        },
        {
          type: 'category',
          label: 'Json RPC Methods',
          items: [
            'innovate/json-rpc-methods/quick-start',
            {
              type: 'category',
              label: 'Methods',
              items: [
                'innovate/json-rpc-methods/methods/eth_accounts',
                'innovate/json-rpc-methods/methods/eth_blockNumber',
                'innovate/json-rpc-methods/methods/eth_call',
                'innovate/json-rpc-methods/methods/eth_chainId',
                'innovate/json-rpc-methods/methods/eth_estimateGas',
                'innovate/json-rpc-methods/methods/eth_feeHistory',
                'innovate/json-rpc-methods/methods/eth_gasPrice',
                'innovate/json-rpc-methods/methods/eth_getAccountTransactionsByPageAndSize',
                'innovate/json-rpc-methods/methods/eth_getAllWhitelistedAssets',
                'innovate/json-rpc-methods/methods/eth_getBalance',
                'innovate/json-rpc-methods/methods/eth_getBlockByHash',
                'innovate/json-rpc-methods/methods/eth_getBlockByNumber',
                'innovate/json-rpc-methods/methods/eth_getBlockReceipts',
                'innovate/json-rpc-methods/methods/eth_getBlocksByPageAndSize',
                'innovate/json-rpc-methods/methods/eth_getBlockTransactionCountByHash',
                'innovate/json-rpc-methods/methods/eth_getBlockTransactionCountByNumber',
                'innovate/json-rpc-methods/methods/eth_getCode',
                'innovate/json-rpc-methods/methods/eth_getDelegation',
                'innovate/json-rpc-methods/methods/eth_getHeliosAddress',
                'innovate/json-rpc-methods/methods/eth_getHeliosValoperAddress',
                'innovate/json-rpc-methods/methods/eth_getProof',
                'innovate/json-rpc-methods/methods/eth_getProposal',
                'innovate/json-rpc-methods/methods/eth_getProposalsByPageAndSize',
                'innovate/json-rpc-methods/methods/eth_getStorageAt',
                'innovate/json-rpc-methods/methods/eth_getTokenBalance',
                'innovate/json-rpc-methods/methods/eth_getTokensBalance',
                'innovate/json-rpc-methods/methods/eth_getTokensByPageAndSize',
                'innovate/json-rpc-methods/methods/eth_getTransactionByBlockHashAndIndex',
                'innovate/json-rpc-methods/methods/eth_getTransactionByBlockNumberAndIndex',
                'innovate/json-rpc-methods/methods/eth_getTransactionByHash',
                'innovate/json-rpc-methods/methods/eth_getTransactionCount',
                'innovate/json-rpc-methods/methods/eth_getTransactionLogs',
                'innovate/json-rpc-methods/methods/eth_getTransactionReceipt',
                'innovate/json-rpc-methods/methods/eth_getTransactionsByPageAndSize',
                'innovate/json-rpc-methods/methods/eth_getValidatorsByPageAndSize',
                'innovate/json-rpc-methods/methods/eth_maxPriorityFeePerGas',
                'innovate/json-rpc-methods/methods/eth_protocolVersion',
                'innovate/json-rpc-methods/methods/eth_sendRawTransaction',
                'innovate/json-rpc-methods/methods/eth_sendTransaction',
                'innovate/json-rpc-methods/methods/eth_sign',
              ]
            }
          ],
        },
        {
          collapsible: true,
          collapsed: false,
          type: 'category',
          label: 'The Future of Helios',
          items: [
            'innovate/future-of-helios/long-term-vision',
            'innovate/future-of-helios/interoperability-expansion',
            'innovate/future-of-helios/ai-driven-blockchain',
          ],
        },
      ],
    },
  ],
};

export default sidebars;

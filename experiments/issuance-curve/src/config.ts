import { createConfig } from './lib/configHelpers';

/**
 * Configuration interface for the conversation
 */
export interface ConversationConfig {
  topic: string;
  description: string;
  whatIs: string;
  why: string;
  polisConversationId: string;
  ogImage: string;
  siteUrl: string;
  siteName: string;
  twitterCardType: string;
  pageTitle: string;
  ogTitle: string;
  learnMoreLink: string;
  learnMoreText: string;
  imageCreditLink: string;
  imageCreditText: string;
  educationDiagramName: string;
  githubRepoUrl: string;
  contributors: {
    displayName: string;
    handle: string;
  }[];
}

/**
 * Main configuration for the site
 * 
 * To create a new site for a different topic, just update these values:
 * - topic: The main topic of conversation (e.g. "The Issuance Curve")
 * - description: A short description of the topic
 * - whatIs: A longer explanation of what the topic is
 * - why: Explanation of why this conversation matters
 * - polisConversationId: The Polis conversation ID
 * - siteUrl: The URL for the site
 * - learnMoreLink: Link to more detailed information about the topic
 * - learnMoreText: Text to display for the learn more link
 * - imageCreditLink: Link to the source of the diagram image
 * - imageCreditText: Text to display for the image credit
 * - educationDiagramName: Filename of the education diagram (located in the static directory)
 * - githubRepoUrl: URL to the GitHub repository
 * - contributors: List of contributors with display names and handles
 * 
 * Everything else (site titles, etc.) will be generated automatically
 * based on the topic.
 */
export const config: ConversationConfig = createConfig({
  topic: "The Issuance Curve",
  description: "Ethereum is debating whether — and how aggressively — to change how new ETH is issued to validators. EIP-8363 proposes tapering issuance to zero and burning validator rewards once staking passes 50% of ETH's supply.",
  whatIs: "Ethereum issues new ETH to validators as a reward for securing the network under proof-of-stake. The \"issuance curve\" is the formula that sets how much ETH gets issued per epoch as a function of total ETH staked. Today's curve flattens into a floor yield of roughly 1.5% even at full saturation, rather than trending toward zero. EIP-8363, \"Tapered Issuance & Burn,\" proposes burning a rising share of validator rewards as the staked ratio climbs — reaching 100% burn (net-zero consensus issuance) once 50% of ETH's supply is staked — without touching execution-layer income like MEV and priority fees.",
  why: "With the validator entry queue saturated, Ethereum's staking ratio is on pace to pass roughly 55% of supply within a couple of years. Supporters of EIP-8363 argue today's yield floor is an unnecessary subsidy that pulls stake toward ETFs, custodians, and exchanges, and that it's better to remove the floor now, while the imbalance is still small and the change is still reversible. Critics counter that a zero-yield regime could select for exactly the wrong stakers — institutions with non-yield reasons to hold ETH — while raising tax exposure for home stakers, shrinking Ethereum's security budget, and undermining ETH's credibility as a productive, yield-bearing asset. This conversation surfaces the strongest arguments on every side, drawn from the EIP-8363 debate on Ethereum Magicians.",
  polisConversationId: "REPLACE_WITH_POLIS_CONVERSATION_ID",
  siteUrl: "https://pu5ha.github.io/polis-experiments/issuance-curve",
  learnMoreLink: "https://ethereum-magicians.org/t/eip-8363-tapered-issuance-burn/29263",
  learnMoreText: "full EIP-8363 forum debate on Ethereum Magicians",
  imageCreditLink: "https://ethereum-magicians.org/t/eip-8363-tapered-issuance-burn/29263",
  imageCreditText: "EIP-8363, Tapered Issuance & Burn",
  educationDiagramName: "issuance-curve-diagram.svg",
  githubRepoUrl: "https://github.com/pu5ha/polis-experiments",
  contributors: [
    { displayName: "chaskin.eth", handle: "chaskin.eth" }
  ]
});
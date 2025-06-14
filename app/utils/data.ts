import { Activity } from "./interface";

export const InvestmentData = [
    {
      issue: "Private funds",
      amount: "$3.2B",
      color: "#1E80FF"
    },
    {
      issue: "Project funds",
      amount: "$1.0B",
      color: "#99C5FF"
    },
    {
      issue: "Protocol funds",
      amount: "$1.5B",
      color: "#F0F6FF"
    }
];

export const organizationData = {
  total_amount: "33,298",
  delta:"1,976",
  deltaTime:"24h ago",
  active: "32.098" ,
  incrActive: "96.4%",
  Inactive: "1,200",
  incrInactive: "3.6%"
}

export const ProposalData = {
  total_proposal: "7,306",
  totalOpen: "5",
  totalClosed: "7,301",
  passed: "6,400",
  incrPassed: "87.7%",
  failed: "500",
  incrFailed: "6.8%",
  cancelled: "101",
  incrCancelled: "5.5%",
  closedData: [
    { name:"Passed", value:"6400",color: "#14C784", delta:"87.7%"},
    {name: "Failed", value:"500", color: "#F54842",delta: "6.8%"},
    {name: "Cancelled", value:"101", color: "#1E80FF", delta: "5.5%"}
  ]
}

export const VotersData = {
  total_visitors: "200,890",
  allData:[
    {name:"Active", value: 180.998,delta: "87.7%", color: "#14C784"},
    {name:"Inactive", value: 19.892, delta: "12.7%", color: "#ECFDF7"}
  ]
}

export const DaoPlatforms = [
    {name: "aave", color: "#1E80FF"},
    {name: "agora", color: "#FEB752"},
    {name: "aragon_apo", color: "#14C784"},
    {name: "aragon_tao", color: "#61D4E5"},
    {name: "boardroom", color: "#FA7AC5"},
    {name: "colony", color: "#AF7AFA"},
    {name: "compound", color: "#61E5B5"},
    {name: "homebase", color: "#7AB4FF"},
    {name: "kyber", color: "#FDDC86"},
    {name: "kyber", color: "#E6FD90"},
    {name: "makerdo", color: "#FAADE1"},
    {name: "koloch", color: "#9AE3EF"},
    {name: "nouns", color: "#F1986F"},
    {name: "openzeppelin", color: "#96F16F"},
    {name: "partydao", color: "#FE717F"},
    {name: "realms", color: "#679DE4"},
    {name: "retropgf", color: "#5ABA82"},
    {name: "snapshot", color: "#E68FC1"},
    {name: "xdao", color: "#B288EC"},
    {name: "tally", color: "#4B85D2"},
    {name: "others", color: "#2B3640"},
];


export const OrganizationLists = {
  filters: [
    { name: "All", image: "" },
    { name: "DeFi", image: "/defi.png" },
    { name: "Infrastructure", image: "/infra.png" },
    { name: "Real-world assets", image: "/rwa.png" },
    { name: "NFTs", image: "/nft.png" },
    { name: "Political", image: "/political.png" },
    { name: "Investment", image: "/investment.png" },
    { name: "Gaming", image: "/gaming.png" },
    { name: "Media & Communications", image: "/media.png" },
    { name: "Art & Culture", image: "/art-and-culture.png" },
    { name: "DAO Tool", image: "/dao-tool.png" },
    { name: "Work & Funding", image: "/work-funding.png" }
  ],
  daos: [
    {
      rank: 1,
      dao_name: "Counterparty",
      treasury_value: "$2.3B",
      bgColor: "#EC1550",
      dao_logo: "/daoIcons/counterparty.svg",
      change_24h: "-0.9%",
      top_tokens: ["/token-1.png", "/token-2.png", "/token-3.png"],
      native_chain: "Bitcoin",
      token_holders: "300K",
      proposals: 987,
      active_participants: 300500,
      votes: "1000K",
      category: "Infrastructure"
    },
    {
      rank: 2,
      dao_name: "Bitcoin",
      treasury_value: "$4.8B",
      change_24h: "+1.1%",
      dao_logo: "/daoIcons/bitcoin.svg",
      top_tokens: ["/token-4.png", "/token-5.png"],
      native_chain: "Bitcoin",
      token_holders: "289K",
      proposals: 176,
      bgColor: "#F7931A",
      active_participants: 167300,
      votes: "2300K",
      category: "Infrastructure"
    },
    {
      rank: 3,
      dao_name: "NXT",
      treasury_value: "$0.4B",
      change_24h: "+0.21%",
      top_tokens: ["/token-6.png", "/token-7.png"],
      native_chain: "Ethereum",
      dao_logo: "/daoIcons/nxt.svg",
      token_holders: "218.7K",
      proposals: 318,
      bgColor: "#008FBB",
      active_participants: 209700,
      votes: "1000K",
      category: "DeFi"
    },
    {
      rank: 4,
      dao_name: "Baelf",
      treasury_value: "$2.9B",
      change_24h: "-0.31%",
      dao_logo: "/daoicons/Bitcoin.svg",
      bgColor: "#2B5EBA",
      top_tokens: ["/token-8.png", "/token-9.png"],
      native_chain: "Ethereum",
      token_holders: "153.7K",
      proposals: 201,
      active_participants: 202700,
      votes: "870K",
      category: "Investment"
    },
    {
      rank: 5,
      dao_name: "Global Current",
      treasury_value: "$2.1B",
      change_24h: "+3.9%",
      dao_logo: "/global.png",
      bgColor: "#8BC53E",
      top_tokens: ["/token-10.png", "/token-1.png", "/token-2.png"],
      native_chain: "Polygon",
      token_holders: "231K",
      proposals: 132,
      active_participants: 87300,
      votes: "39.2K",
      category: "Real-world assets"
    },
    {
      rank: 6,
      dao_name: "Bytecoin",
      treasury_value: "$1.1B",
      change_24h: "+2.1%",
      top_tokens: ["/token-1.png", "/token-4.png"],
      native_chain: "Monero",
      token_holders: "229K",
      proposals: 91,
      active_participants: 189000,
      votes: "370.3K",
      bgColor: "#F04086",
      dao_logo: "/daoIcons/bytecoin.svg",
      category: "Infrastructure"
    },
    {
      rank: 7,
      dao_name: "Lite",
      treasury_value: "$2.3B",
      change_24h: "+4.09%",
      top_tokens: ["/token-5.png", "/token-6.png"],
      native_chain: "Litecoin",
      token_holders: "288K",
      proposals: 118,
      active_participants: 98200,
      votes: "80.1K",
      bgColor: "#BEBEBE",
      dao_logo: "/llitecoin.png",
      category: "Infrastructure"
    },
    {
      rank: 8,
      dao_name: "MinerCoin",
      treasury_value: "$0.7B",
      change_24h: "-0.21%",
      top_tokens: ["/token-7.png", "/token-8.png", "/token-9.png"],
      native_chain: "Bitcoin",
      token_holders: "130K",
      proposals: 176,
      active_participants: 186900,
      votes: "201.8K",
      bgColor: "#00AEEF",
      dao_logo: "/miners.png",
      category: "Work & Funding"
    },
    {
      rank: 9,
      dao_name: "Dash",
      treasury_value: "$3.1B",
      change_24h: "-0.71%",
      top_tokens: ["/token-2.png", "/token-2.png"],
      native_chain: "Dash",
      token_holders: "167K",
      proposals: 158,
      active_participants: 167300,
      votes: "1000K",
      bgColor: "#2573C2",
      dao_logo: "/dash.png",
      category: "Infrastructure"
    },
    {
      rank: 10,
      dao_name: "Baelf",
      treasury_value: "$3.1B",
      change_24h: "-0.07%",
      top_tokens: ["/token-8.png", "/token-9.png"],
      native_chain: "Ethereum",
      token_holders: "229K",
      proposals: 132,
      active_participants: 209700,
      votes: "2200K",
      bgColor: "#2B5EBA",
      dao_logo: "/Bitcoin.png",
      category: "Investment"
    },
    {
      rank: 11,
      dao_name: "0x",
      treasury_value: "$1.4B",
      change_24h: "+0.06%",
      top_tokens: ["/token-2.png", "/token-3.png"],
      native_chain: "Ethereum",
      token_holders: "153K",
      proposals: 98,
      active_participants: 121600,
      votes: "370.3K",
      bgColor: "#BEBEBE",
      dao_logo: "/dash.png",
      category: "DeFi"
    },
    {
      rank: 12,
      dao_name: "Global Current",
      treasury_value: "$3.6B",
      change_24h: "+2.2%",
      top_tokens: ["/token-1.png", "/token-3.png", "/token-2.png"],
      native_chain: "Polygon",
      token_holders: "147K",
      proposals: 562,
      active_participants: 98300,
      votes: "49.8K",
      bgColor: "#8BC53E",
      dao_logo: "/global.png",
      category: "Real-world assets"
    },
    {
      rank: 13,
      dao_name: "Aeon",
      treasury_value: "$5.2B",
      change_24h: "-0.3%",
      top_tokens: ["/token-4.png", "/token-5.png"],
      native_chain: "Aeon",
      token_holders: "130K",
      proposals: 91,
      active_participants: 64400,
      votes: "840.7K",
      bgColor: "#5FBCD3",
      dao_logo: "/aeon.png",
      category: "Infrastructure"
    },
    {
      rank: 14,
      dao_name: "Wanchain",
      treasury_value: "$1.3B",
      change_24h: "+1.9%",
      top_tokens: ["/token-6.png", "/token-7.png"],
      native_chain: "Wanchain",
      token_holders: "100K",
      proposals: 67,
      active_participants: 87200,
      votes: "12.1K",
      bgColor: "#2C5F93",
      dao_logo: "/wanchain.png",
      category: "Infrastructure"
    },
    {
      rank: 15,
      dao_name: "BitNewChain",
      treasury_value: "$1.1B",
      change_24h: "+1.35%",
      top_tokens: ["/token-8.png", "/token-9.png"],
      native_chain: "Bitcoin",
      token_holders: "167K",
      proposals: 87,
      active_participants: 300500,
      votes: "1600K",
      bgColor: "#4365E3",
      dao_logo: "/bitnewchain.png",
      category: "Infrastructure"
    },
    {
      rank: 16,
      dao_name: "Decred",
      treasury_value: "$2.4B",
      change_24h: "-0.51%",
      top_tokens: ["/token-3.png", "/token-5.png"],
      native_chain: "Decred",
      token_holders: "118K",
      proposals: 338,
      active_participants: 85300,
      votes: "80.1K",
      bgColor: "#3977FB",
      dao_logo: "/wanchain.png",
      category: "Political"
    },
    {
      rank: 17,
      dao_name: "Aeon",
      treasury_value: "$3.6B",
      change_24h: "+0.01%",
      top_tokens: ["/token-4.png", "/token-5.png"],
      native_chain: "Aeon",
      token_holders: "130K",
      proposals: 53,
      active_participants: 186900,
      votes: "785.5K",
      bgColor: "#5FBCD3",
      dao_logo: "/aeon.png",
      category: "Infrastructure"
    },
    {
      rank: 18,
      dao_name: "Dash",
      treasury_value: "$3.6B",
      change_24h: "+1.4%",
      top_tokens: ["/token-1.png", "/token-2.png"],
      native_chain: "Dash",
      token_holders: "127K",
      proposals: 62,
      active_participants: 84500,
      votes: "930.1K",
      bgColor: "#2573C2",
      dao_logo: "/dash.png",
      category: "Political"
    },
    {
      rank: 19,
      dao_name: "OmniDAO",
      treasury_value: "$1.2B",
      change_24h: "+0.4%",
      top_tokens: ["/token-5.png", "/token-6.png"],
      native_chain: "Ethereum",
      token_holders: "122K",
      proposals: 49,
      active_participants: 72300,
      votes: "64.3K",
      bgColor: "#12AD45",
      dao_logo: "/token-1.png",
      category: "DAO Tool"
    },
    {
      rank: 20,
      dao_name: "MysticRealm",
      treasury_value: "$0.8B",
      change_24h: "-0.8%",
      top_tokens: ["/token-1.png", "/token-7.png"],
      native_chain: "Arbitrum",
      token_holders: "119K",
      proposals: 75,
      active_participants: 69000,
      votes: "44.6K",
      bgColor: "#B75AE0",
      dao_logo: "/token-2.png",
      category: "Gaming"
    }
  ]
};

export const DAOTitles = [
  {name:"Rank", icon: "/switch-vertical.png"},
  {name:"Dao name", icon: "/switch-vertical.png"},
  {name:"Treasury size", icon: ""},
  {name:"Last 24 hrs", icon: "/switch-vertical.png"},
  {name:"Top treasury tokens", icon: "/switch-vertical.png"},
  {name:"Native chain", icon: "/switch-vertical.png"},
  {name:"Token holders", icon: "/switch-vertical.png"},
  {name:"Proposals", icon: "/switch-vertical.png"},
  {name:"Active participants", icon: "/switch-vertical.png"},
  {name:"Vote", icon: "/switch-vertical.png"},
];

export const AssetsTokenList = [
  {
    "token": "CO",
    "logo": "/counterparty.svg",
    "quantity": "2.8B",
    "price": 2.3,
    "value": 300000,
    "change24h": "0.0%",
    "changeDirection": "down",
    "owners": ["0x...663a26", "0x...ab4312", "0x...f9387d"]
  },
  {
    "token": "BTC",
    "logo": "/Bitcoin.svg",
    "quantity": "1.8B",
    "price": 1.2,
    "value": 289000,
    "change24h": "0.0%",
    "changeDirection": "down",
    "owners": ["0x...663a26", "0x...21ae43"]
  },
  {
    "token": "NXT",
    "logo": "/asset-token-11.svg",
    "quantity": "1.3B",
    "price": 2.5,
    "value": 287000,
    "change24h": "0.0%",
    "changeDirection": "down",
    "owners": ["0x...663a26"]
  },
  {
    "token": "BAE",
    "logo": "/asset-token-4.svg",
    "quantity": "1.6B",
    "price": 1.1,
    "value": 153000,
    "change24h": "0.0%",
    "changeDirection": "up",
    "owners": ["0x...663a26", "0x...4491af", "0x...c3410f", "0x...94dd23"]
  },
  {
    "token": "GCF",
    "logo": "/asset-token-5.svg",
    "quantity": "1.2B",
    "price": 3.4,
    "value": 231000,
    "change24h": "0.0%",
    "changeDirection": "down",
    "owners": ["0x...663a26", "0x...aabbcc"]
  },
  {
    "token": "BYC",
    "logo": "/asset-token-6.svg",
    "quantity": "1.1B",
    "price": 2.6,
    "value": 229000,
    "change24h": "0.0%",
    "changeDirection": "up",
    "owners": ["0x...663a26", "0x...88ffee", "0x...998877"]
  },
  {
    "token": "LTE",
    "logo": "/asset-token-7.svg",
    "quantity": "800M",
    "price": 1.8,
    "value": 289000,
    "change24h": "0.0%",
    "changeDirection": "down",
    "owners": ["0x...663a26"]
  },
  {
    "token": "MCO",
    "logo": "/asset-token-8.svg",
    "quantity": "200M",
    "price": 1.0,
    "value": 130000,
    "change24h": "0.0%",
    "changeDirection": "down",
    "owners": ["0x...663a26", "0x...778899"]
  },
  {
    "token": "DAS",
    "logo": "/asset-token-9.svg",
    "quantity": "271M",
    "price": 2.6,
    "value": 167000,
    "change24h": "0.0%",
    "changeDirection": "up",
    "owners": ["0x...663a26", "0x...ff1122", "0x...aa3344", "0x...cc5566", "0x...dd7788"]
  },
  {
    "token": "CCP",
    "logo": "/asset-token-10.svg",
    "quantity": "1.2B",
    "price": 3.6,
    "value": 229000,
    "change24h": "0.0%",
    "changeDirection": "up",
    "owners": ["0x...663a26", "0x...19ac87"]
  }
]

export const GovernanceDashContent = [
  {name: "All proposals", value: "187", icon:""},
  {name: "Open", value: "5",icon:""},
  {name: "Closed", value: "182",icon:""},
  {name: "Success rate", value: "18%",icon:""},
  {name: "Voters", value: "120,000",icon:""},
  {name: "Avg. time to decision", value: "14 days",icon:""},
  {name: "Governance model", value: "Token-based",icon:"/info-icon.svg"}
]

export const proposalsMainData = [
  {
    id: 1,
    author: "0x266...87f",
    status: "closed",
    createdAt: "1yr ago",
    description: "This is a brief write up detailing what exactly the proposal was about...",
    category: "Financial",
    stage: "Completed",
    type: "On-chain",
    result: "Passed",
    votes: {
      for: { count: 25, percentage: 50 },
      against: { count: 25, percentage: 25},
      abstain: { count: 25, percentage: 50 },
      total: 75
    },
    tags: ["On-chain", "Financial", "Passed"]
  },
  {
    id: 2,
    author: "0xB73...A24",
    status: "closed",
    createdAt: "2mo ago",
    description: "A proposal aiming to redistribute treasury funds to incentivize core contributors.",
    category: "Governance",
    stage: "Completed",
    type: "On-chain",
    result: "Passed",
    votes: {
      for: { count: 48, percentage: 64 },
      against: { count: 20, percentage: 27 },
      abstain: { count: 7, percentage: 9 },
      total: 75
    },
    tags: ["On-chain", "Governance", "Passed"]
  },
  {
    id: 3,
    author: "0x8F1...19D",
    status: "open",
    createdAt: "3w ago",
    description: "This proposal recommends updating the smart contract to support new DAO integrations.",
    category: "Technical",
    stage: "Voting",
    type: "Off-chain",
    result: "Pending",
    votes: {
      for: { count: 15, percentage: 30 },
      against: { count: 35, percentage: 70 },
      abstain: { count: 0, percentage: 0 },
      total: 50
    },
    tags: ["Off-chain", "Technical", "Pending"]
  },
  {
    id: 4,
    author: "0x8F1...19D",
    status: "open",
    createdAt: "3w ago",
    description: "This proposal recommends updating the smart contract to support new DAO integrations.",
    category: "Technical",
    stage: "Voting",
    type: "Off-chain",
    result: "Pending",
    votes: {
      for: { count: 15, percentage: 30 },
      against: { count: 35, percentage: 70 },
      abstain: { count: 0, percentage: 0 },
      total: 50
    },
    tags: ["Off-chain", "Technical", "Pending"]
  }
];


export const DaoMembers = [
    {
      "id": 1,
      "address": "0x1b78...watt",
      "avatar": "/member-1.png",
      "lastActive": "3 months ago",
      "votingPower": 5120876.98,
      "percentageOwnership": 0.5,
      "proposals": 0,
      "votes": { "cast": 60, "total": 90, "percentage": 66.7 },
      "last5Proposals": ["approved", "approved", "approved", "rejected", "rejected"],
      "otherDAOsCount": 10,
      "otherDAOs": [
        { "name": "Dash DAO", "icon": "/memberdao-1.svg" },
        { "name": "Zcash DAO", "icon": "/memberdao-2.svg" },
        { "name": "Token DAO", "icon": "/memberdao-3.svg" },
        { "name": "Shield DAO", "icon": "/memberdao-4.svg" },
        { "name": "Waves DAO", "icon": "/memberdao-5.svg" },
        { "name": "Diamond DAO", "icon": "/memberdao-6.svg" }
      ]
    },
    {
      "id": 2,
      "address": "0xa3d4...core",
      "avatar": "/member-2.png",
      "lastActive": "2 days ago",
      "votingPower": 120000.55,
      "percentageOwnership": 0.01,
      "proposals": 2,
      "votes": { "cast": 8, "total": 10, "percentage": 80 },
      "last5Proposals": ["approved", "rejected", "approved", "approved", "approved"],
      "otherDAOsCount": 3,
      "otherDAOs": [
        { "name": "Dash DAO", "icon": "/memberdao-1.svg" },
        { "name": "Zcash DAO", "icon": "/memberdao-2.svg" },
        { "name": "Token DAO", "icon": "/memberdao-3.svg" },
        { "name": "Shield DAO", "icon": "/memberdao-4.svg" },
        { "name": "Waves DAO", "icon": "/memberdao-5.svg" },
        { "name": "Diamond DAO", "icon": "/memberdao-6.svg" }
      ]
    },
    {
      "id": 3,
      "address": "0x9f77...byte",
      "avatar": "/member-3.png",
      "lastActive": "1 month ago",
      "votingPower": 780000.0,
      "percentageOwnership": 0.07,
      "proposals": 5,
      "votes": { "cast": 25, "total": 30, "percentage": 83.3 },
      "last5Proposals": ["approved", "approved", "approved", "approved", "approved"],
      "otherDAOsCount": 6,
      "otherDAOs": [
       { "name": "Dash DAO", "icon": "/memberdao-1.svg" },
        { "name": "Zcash DAO", "icon": "/memberdao-2.svg" },
        { "name": "Token DAO", "icon": "/memberdao-3.svg" },
        { "name": "Shield DAO", "icon": "/memberdao-4.svg" },
        { "name": "Waves DAO", "icon": "/memberdao-5.svg" },
        { "name": "Diamond DAO", "icon": "/memberdao-6.svg" }
      ]
    },
    {
      "id": 4,
      "address": "0x5e3f...nova",
      "avatar": "/member-4.png",
      "lastActive": "5 hours ago",
      "votingPower": 32000.75,
      "percentageOwnership": 0.002,
      "proposals": 0,
      "votes": { "cast": 3, "total": 5, "percentage": 60 },
      "last5Proposals": ["rejected", "approved", "rejected", "rejected", "approved"],
      "otherDAOsCount": 2,
      "otherDAOs": [
       { "name": "Dash DAO", "icon": "/memberdao-1.svg" },
        { "name": "Zcash DAO", "icon": "/memberdao-2.svg" },
        { "name": "Token DAO", "icon": "/memberdao-3.svg" },
        { "name": "Shield DAO", "icon": "/memberdao-4.svg" },
        { "name": "Waves DAO", "icon": "/memberdao-5.svg" },
        { "name": "Diamond DAO", "icon": "/memberdao-6.svg" }
      ]
    },
    {
      "id": 5,
      "address": "0xbc45...lens",
      "avatar": "/member-5.png",
      "lastActive": "1 week ago",
      "votingPower": 1550000.25,
      "percentageOwnership": 0.15,
      "proposals": 4,
      "votes": { "cast": 18, "total": 20, "percentage": 90 },
      "last5Proposals": ["approved", "approved", "approved", "approved", "rejected"],
      "otherDAOsCount": 4,
      "otherDAOs": [
        { "name": "Dash DAO", "icon": "/memberdao-1.svg" },
        { "name": "Zcash DAO", "icon": "/memberdao-2.svg" },
        { "name": "Token DAO", "icon": "/memberdao-3.svg" },
        { "name": "Shield DAO", "icon": "/memberdao-4.svg" },
        { "name": "Waves DAO", "icon": "/memberdao-5.svg" },
        { "name": "Diamond DAO", "icon": "/memberdao-6.svg" }
      ]
    },
    {
      "id": 6,
      "address": "0x67a9...meta",
      "avatar": "/member-1.png",
      "lastActive": "4 days ago",
      "votingPower": 98000.0,
      "percentageOwnership": 0.01,
      "proposals": 1,
      "votes": { "cast": 7, "total": 9, "percentage": 77.8 },
      "last5Proposals": ["approved", "approved", "rejected", "rejected", "approved"],
      "otherDAOsCount": 3,
      "otherDAOs": [
        { "name": "Dash DAO", "icon": "/memberdao-1.svg" },
        { "name": "Zcash DAO", "icon": "/memberdao-2.svg" },
        { "name": "Token DAO", "icon": "/memberdao-3.svg" },
        { "name": "Shield DAO", "icon": "/memberdao-4.svg" },
        { "name": "Waves DAO", "icon": "/memberdao-5.svg" },
        { "name": "Diamond DAO", "icon": "/memberdao-6.svg" }
      ]
    },
    {
      "id": 7,
      "address": "0xa2be...flux",
      "avatar": "/member-2.png",
      "lastActive": "2 weeks ago",
      "votingPower": 1000000.0,
      "percentageOwnership": 0.09,
      "proposals": 3,
      "votes": { "cast": 12, "total": 15, "percentage": 80 },
      "last5Proposals": ["approved", "approved", "approved", "approved", "approved"],
      "otherDAOsCount": 5,
      "otherDAOs": [
        { "name": "Dash DAO", "icon": "/memberdao-1.svg" },
        { "name": "Zcash DAO", "icon": "/memberdao-2.svg" },
        { "name": "Token DAO", "icon": "/memberdao-3.svg" },
        { "name": "Shield DAO", "icon": "/memberdao-4.svg" },
        { "name": "Waves DAO", "icon": "/memberdao-5.svg" },
        { "name": "Diamond DAO", "icon": "/memberdao-6.svg" }
      ]
    },
    {
      "id": 8,
      "address": "0xff12...vault",
      "avatar": "/member-3.png",
      "lastActive": "6 days ago",
      "votingPower": 204000.45,
      "percentageOwnership": 0.02,
      "proposals": 2,
      "votes": { "cast": 10, "total": 13, "percentage": 76.9 },
      "last5Proposals": ["approved", "rejected", "approved", "approved", "rejected"],
      "otherDAOsCount": 2,
      "otherDAOs": [
        { "name": "Dash DAO", "icon": "/memberdao-1.svg" },
        { "name": "Zcash DAO", "icon": "/memberdao-2.svg" },
        { "name": "Token DAO", "icon": "/memberdao-3.svg" },
        { "name": "Shield DAO", "icon": "/memberdao-4.svg" },
        { "name": "Waves DAO", "icon": "/memberdao-5.svg" },
        { "name": "Diamond DAO", "icon": "/memberdao-6.svg" }
      ]
    },
    {
      "id": 9,
      "address": "0xc4de...loop",
      "avatar": "/member-4.png",
      "lastActive": "1 day ago",
      "votingPower": 450000.0,
      "percentageOwnership": 0.04,
      "proposals": 1,
      "votes": { "cast": 5, "total": 5, "percentage": 100 },
      "last5Proposals": ["approved", "approved", "approved", "approved", "approved"],
      "otherDAOsCount": 1,
      "otherDAOs": [
        { "name": "Dash DAO", "icon": "/memberdao-1.svg" },
        { "name": "Zcash DAO", "icon": "/memberdao-2.svg" },
        { "name": "Token DAO", "icon": "/memberdao-3.svg" },
        { "name": "Shield DAO", "icon": "/memberdao-4.svg" },
        { "name": "Waves DAO", "icon": "/memberdao-5.svg" },
        { "name": "Diamond DAO", "icon": "/memberdao-6.svg" }
      ]
    },
    {
      "id": 10,
      "address": "0xdef0...eco",
      "avatar": "/member-5.png",
      "lastActive": "7 hours ago",
      "votingPower": 34000.0,
      "percentageOwnership": 0.003,
      "proposals": 0,
      "votes": { "cast": 2, "total": 4, "percentage": 50 },
      "last5Proposals": ["rejected", "rejected", "approved", "rejected", "approved"],
      "otherDAOsCount": 2,
      "otherDAOs": [
        { "name": "Dash DAO", "icon": "/memberdao-1.svg" },
        { "name": "Zcash DAO", "icon": "/memberdao-2.svg" },
        { "name": "Token DAO", "icon": "/memberdao-3.svg" },
        { "name": "Shield DAO", "icon": "/memberdao-4.svg" },
        { "name": "Waves DAO", "icon": "/memberdao-5.svg" },
        { "name": "Diamond DAO", "icon": "/memberdao-6.svg" }
      ]
    }
]

export const VestingEventsData = [
  {
    id: 'event-group-1',
    date: "December 25, 2024",
    daysRemaining: "98 days",
    events: [
      {
        id: 'event-1-1',
        title: "Unlock of 2.5% (12.5M) of Max Supply - $49.64M (2.46% of m. Cap)",
        categories: ["Team and Advisors", "Vesting"],
        vestingType: "Non-Inflationary",
        priceImpact: "-0.88% / -$1.3M",
        unlockPercentage: 54,
        tokenSymbol: "OREC",
        tokenAmount: "-12.5M"
      },
      {
        id: 'event-1-2',
        title: "Unlock of 2.5% (12.5M) of Max Supply - $49.64M (2.46% of m. Cap)",
        categories: ["Team and Advisors", "Vesting"],
        vestingType: "Non-Inflationary",
        priceImpact: "-0.88% / -$1.3M",
        unlockPercentage: 54,
        tokenSymbol: "OREC",
        tokenAmount: "-12.5M"
      }
    ]
  },
  {
    id: 'event-group-2',
    date: "January 10, 2025",
    daysRemaining: "114 days",
    events: [
      {
        id: 'event-2-1',
        title: "Unlock of 3% (15M) of Max Supply - $59.12M (2.96% of m. Cap)",
        categories: ["Investors", "Vesting"],
        vestingType: "Non-Inflationary",
        priceImpact: "-1.02% / -$1.8M",
        unlockPercentage: 63,
        tokenSymbol: "OREC",
        tokenAmount: "-15M"
      }
    ]
  },
  {
    id: 'event-group-3',
    date: "February 5, 2025",
    daysRemaining: "140 days",
    events: [
      {
        id: 'event-3-1',
        title: "Unlock of 1.5% (7.5M) of Max Supply - $29.82M (1.48% of m. Cap)",
        categories: ["Team & Advisors"],
        vestingType: "Inflationary",
        priceImpact: "-0.55% / -$900K",
        unlockPercentage: 40,
        tokenSymbol: "OREC",
        tokenAmount: "-7.5M"
      }
    ]
  },
  {
    id: 'event-group-4',
    date: "March 1, 2025",
    daysRemaining: "164 days",
    events: [
      {
        id: 'event-4-1',
        title: "Unlock of 2% (10M) of Max Supply - $39.70M (1.98% of m. Cap)",
        categories: ["Community Incentives"],
        vestingType: "Non-Inflationary",
        priceImpact: "-0.72% / -$1.2M",
        unlockPercentage: 50,
        tokenSymbol: "OREC",
        tokenAmount: "-10M"
      }
    ]
  },
  {
    id: 'event-group-5',
    date: "April 15, 2025",
    daysRemaining: "209 days",
    events: [
      {
        id: 'event-5-1',
        title: "Unlock of 4% (20M) of Max Supply - $79.28M (3.92% of m. Cap)",
        categories: ["Airdrops", "Vesting"],
        vestingType: "Inflationary",
        priceImpact: "-1.34% / -$2.2M",
        unlockPercentage: 75,
        tokenSymbol: "OREC",
        tokenAmount: "-20M"
      }
    ]
  }
];

export const UpcomingUnlockData = [
  {
    "project": {
      "name": "Iron Fish",
      "ticker": "IRN",
      "avatar": "/member-5.png",
      "date": "2024-08-30",
      "isToday": true
    },
    "unlock": {
      "amount": "1.76M",
      "token": "IRON"
    },
    "value": {
      "percentageOfMarketCap": 3.12,
      "usdValue": 804600
    }
  },
  {
    "project": {
      "name": "Aqua Token",
      "ticker": "AQT",
      "avatar": "/member-1.png",
      "date": "2024-09-05",
      "isToday": false
    },
    "unlock": {
      "amount": "500K",
      "token": "AQUA"
    },
    "value": {
      "percentageOfMarketCap": 1.25,
      "usdValue": 312000
    }
  },
  {
    "project": {
      "name": "Solar Chain",
      "ticker": "SLR",
      "avatar": "/member-2.png",
      "date": "2024-09-10",
      "isToday": false
    },
    "unlock": {
      "amount": "2.3M",
      "token": "SLR"
    },
    "value": {
      "percentageOfMarketCap": 4.05,
      "usdValue": 912000
    }
  },
  {
    "project": {
      "name": "Moon Vault",
      "ticker": "MVL",
      "avatar": "/member-3.png",
      "date": "2024-09-12",
      "isToday": false
    },
    "unlock": {
      "amount": "3.1M",
      "token": "MVL"
    },
    "value": {
      "percentageOfMarketCap": 6.22,
      "usdValue": 1244000
    }
  },
  {
    "project": {
      "name": "PixelFi",
      "ticker": "PXL",
      "avatar": "/member-4.png",
      "date": "2024-09-15",
      "isToday": false
    },
    "unlock": {
      "amount": "900K",
      "token": "PXL"
    },
    "value": {
      "percentageOfMarketCap": 2.00,
      "usdValue": 480000
    }
  },
  {
    "project": {
      "name": "Nebula Coin",
      "ticker": "NBC",
      "avatar": "/member-5.png",
      "date": "2024-09-18",
      "isToday": false
    },
    "unlock": {
      "amount": "4M",
      "token": "NBC"
    },
    "value": {
      "percentageOfMarketCap": 8.00,
      "usdValue": 2000000
    }
  },
  {
    "project": {
      "name": "GravityX",
      "ticker": "GRX",
      "avatar": "/member-1.png",
      "date": "2024-09-20",
      "isToday": false
    },
    "unlock": {
      "amount": "2M",
      "token": "GRX"
    },
    "value": {
      "percentageOfMarketCap": 3.50,
      "usdValue": 875000
    }
  },
  {
    "project": {
      "name": "Oceanic DAO",
      "ticker": "OCN",
      "avatar": "/member-2.png",
      "date": "2024-09-25",
      "isToday": false
    },
    "unlock": {
      "amount": "1.2M",
      "token": "OCN"
    },
    "value": {
      "percentageOfMarketCap": 2.75,
      "usdValue": 660000
    }
  },
  {
    "project": {
      "name": "CryptoHarvest",
      "ticker": "CHV",
      "avatar": "/member-3.png",
      "date": "2024-09-28",
      "isToday": false
    },
    "unlock": {
      "amount": "850K",
      "token": "CHV"
    },
    "value": {
      "percentageOfMarketCap": 1.98,
      "usdValue": 410000
    }
  },
  {
    "project": {
      "name": "Lumen Protocol",
      "ticker": "LMP",
      "avatar": "/member-4.png",
      "date": "2024-10-01",
      "isToday": false
    },
    "unlock": {
      "amount": "3.5M",
      "token": "LMP"
    },
    "value": {
      "percentageOfMarketCap": 7.20,
      "usdValue": 1800000
    }
  }
];


export const mockActivity: { [key: string]: Activity[] } = {
  "2025-05-01": [
    { id: 1, type: "event", title: "Liquidity mining event" }
  ],
  "2025-05-02": [
    { id: 2, type: "Q & A session", title: "Q & A session - Tutorial" }
  ],
  "2025-05-04": [
    { id: 3, type: "token", title: "Token unlock event" }
  ],
  "2025-05-05": [
    { id: 4, type: "team", title: "Team strategy meeting" }
  ],
  "2025-05-07": [
    { id: 5, type: "event", title: "Liquidity mining event" },
    { id: 6, type: "token", title: "Token unlock event" }
  ],
  "2025-05-08": [],
  "2025-05-09": [
    { id: 7, type: "event", title: "DAO governance poll" }
  ],
  "2025-05-11": [
    { id: 8, type: "team", title: "Team coordination call" }
  ],
  "2025-05-12": [
    { id: 9, type: "Q & A session", title: "Q & A session - AMA" }
  ],
  "2025-05-14": [
    { id: 10, type: "token", title: "Token unlock event" }
  ],
  "2025-05-15": [
    { id: 11, type: "event", title: "Liquidity mining event" }
  ],
  "2025-05-17": [
    { id: 12, type: "team", title: "Team retrospective" }
  ],
  "2025-05-18": [
    { id: 13, type: "event", title: "Protocol upgrade event" }
  ],
  "2025-05-20": [
    { id: 14, type: "token", title: "Token unlock event" },
    { id: 15, type: "Q & A session", title: "Q & A session - Feedback" }
  ],
  "2025-05-21": [
    { id: 16, type: "event", title: "Liquidity mining event" }
  ],
  "2025-05-23": [
    { id: 17, type: "team", title: "Team building activity" }
  ],
  "2025-05-24": [
    { id: 18, type: "event", title: "DAO treasury poll" }
  ],
  "2025-05-26": [
    { id: 19, type: "token", title: "Token unlock event" }
  ],
  "2025-05-27": [
    { id: 20, type: "event", title: "Community meetup" }
  ],
  "2025-05-29": [
    { id: 21, type: "team", title: "Sprint planning" }
  ],
  "2025-05-30": [
    { id: 22, type: "event", title: "Liquidity mining event" }
  ],
  "2025-05-31": [
    { id: 23, type: "token", title: "Token unlock event" }
  ]
};

export const GovProposalData = [
  {
    "proposalOverview": {
      "All Proposals": 780000,
      "Governance tokens": 120000,
      "Toatal votes cast": 1600000,
      "Voter participation": "81%",
      "success rate": "64%",
      "Token utilization rate": "40%",
      "Implementation rate": "32%"
     },
    "proposals": [
      {
        "id": 1,
        "title": "Trust Forward Vision and Operational Expense Request",
        "created": "an hour ago",
        "daoName": "Counterparty",
        "stage": "Queued",
        "status": "Pending",
        "category": "Policy",
        "sector": "Real-World Asset",
        "daoImage": "/daoIcons/counterparty.svg"
      },
      {
        "id": 2,
        "title": "Trust Forward Vision and Operational Expense Request",
        "created": "an hour ago",
        "daoName": "Bitcoin",
        "stage": "Preliminary discussion",
        "status": "Open",
        "category": "Policy",
        "sector": "Gaming",
        "daoImage": "/daoIcons/bitcoin.svg"
      },
      {
        "id": 3,
        "title": "Trust Forward Vision and Operational Expense Request",
        "created": "an hour ago",
        "daoName": "NFT",
        "stage": "Completed",
        "status": "Closed",
        "category": "Policy",
        "sector": "NFT",
        "daoImage": "/daoIcons/nxt.svg"
      },
      {
        "id": 4,
        "title": "Trust Forward Vision and Operational Expense Request",
        "created": "an hour ago",
        "daoName": "Basefi",
        "stage": "Failed",
        "status": "Closed",
        "category": "Policy",
        "sector": "Political",
        "daoImage": "/daoIcons/baelf.svg"
      },
      {
        "id": 5,
        "title": "Trust Forward Vision and Operational Expense Request",
        "created": "an hour ago",
        "daoName": "GlobalCurrent",
        "stage": "Preliminary discussion",
        "status": "Open",
        "category": "Policy",
        "sector": "Infrastructure",
        "daoImage": "/global.svg"
      },
      {
        "id": 6,
        "title": "Trust Forward Vision and Operational Expense Request",
        "created": "an hour ago",
        "daoName": "Bytecoin",
        "stage": "Completed",
        "status": "Closed",
        "category": "Policy",
        "sector": "Real-World Asset",
        "daoImage": "/daoIcons/bytecoin.svg"
      },
      {
        "id": 7,
        "title": "Trust Forward Vision and Operational Expense Request",
        "created": "an hour ago",
        "daoName": "Lite",
        "stage": "Upcoming Vote",
        "status": "Pending",
        "category": "Policy",
        "sector": "NFT",
        "daoImage": "/daoIcons/litecoin.svg"
      },
      {
        "id": 8,
        "title": "Trust Forward Vision and Operational Expense Request",
        "created": "an hour ago",
        "daoName": "MetaCoin",
        "stage": "Active Vote",
        "status": "Open",
        "category": "Policy",
        "sector": "Real-World Asset",
        "daoImage": "/daoIcons/baelf.svg"
      },
      {
        "id": 9,
        "title": "Trust Forward Vision and Operational Expense Request",
        "created": "an hour ago",
        "daoName": "Dash",
        "stage": "Active Vote",
        "status": "Open",
        "category": "Policy",
        "sector": "Gaming",
        "daoImage": "/minexcoin.svg"
      },
      {
        "id": 10,
        "title": "Trust Forward Vision and Operational Expense Request",
        "created": "an hour ago",
        "daoName": "Basefi",
        "stage": "Succeeded",
        "status": "Closed",
        "category": "Policy",
        "sector": "Real-World Asset",
        "daoImage": "/daoIcons/dash.svg"
      },
      {
        "id": 11,
        "title": "Trust Forward Vision and Operational Expense Request",
        "created": "an hour ago",
        "daoName": "Dx",
        "stage": "Succeeded",
        "status": "Closed",
        "category": "Policy",
        "sector": "Real-World Asset",
        "daoImage": "/daoIcons/ox.svg"
      },
      {
        "id": 12,
        "title": "Trust Forward Vision and Operational Expense Request",
        "created": "an hour ago",
        "daoName": "GlobalCurrent",
        "stage": "Queued",
        "status": "Pending",
        "category": "Policy",
        "sector": "NFT",
        "daoImage": "/global.svg"
      },
      {
        "id": 13,
        "title": "Trust Forward Vision and Operational Expense Request",
        "created": "an hour ago",
        "daoName": "Aeon",
        "stage": "Completed",
        "status": "Closed",
        "category": "Policy",
        "sector": "Real-World Asset",
        "daoImage": "/daoIcons/counterparty.svg"
      },
      {
        "id": 14,
        "title": "Trust Forward Vision and Operational Expense Request",
        "created": "an hour ago",
        "daoName": "Wanchain",
        "stage": "Failed",
        "status": "Closed",
        "category": "Policy",
        "sector": "Political",
        "daoImage": "/daoIcons/aeon.svg"
      },
      {
        "id": 15,
        "title": "Trust Forward Vision and Operational Expense Request",
        "created": "an hour ago",
        "daoName": "BitNewChain",
        "stage": "Preliminary discussion",
        "status": "Open",
        "category": "Policy",
        "sector": "Political",
        "daoImage": "/daoIcons/wanchain.svg"
      },
      {
        "id": 16,
        "title": "Trust Forward Vision and Operational Expense Request",
        "created": "an hour ago",
        "daoName": "Decred",
        "stage": "Active Vote",
        "status": "Open",
        "category": "Policy",
        "sector": "Infrastructure",
        "daoImage": "/daoIcons/aeon.svg"
      },
      {
        "id": 17,
        "title": "Trust Forward Vision and Operational Expense Request",
        "created": "an hour ago",
        "daoName": "Gov4",
        "stage": "Queued",
        "status": "Pending",
        "category": "Policy",
        "sector": "Data",
        "daoImage": "/daoIcons/bitnew.svg"
      },
      {
        "id": 18,
        "title": "Trust Forward Vision and Operational Expense Request",
        "created": "an hour ago",
        "daoName": "Xrnullya",
        "stage": "Queued",
        "status": "Pending",
        "category": "Policy",
        "sector": "Real-World Asset",
        "daoImage": "/daoIcons/bytecoin.svg"
      },
      {
        "id": 19,
        "title": "Trust Forward Vision and Operational Expense Request",
        "created": "an hour ago",
        "daoName": "USD",
        "stage": "Completed",
        "status": "Closed",
        "category": "Policy",
        "sector": "Data",
        "daoImage": "/daoIcons/dash.svg"
      }
    ]
  }
];

export const GovAllProposals = [
  {
    "id": 0,
    "name": "Protocol",
    "perPrice": 13.6,
    "percIncr": 136.6,
    "color": "#1E80FF"
  },
  {
    "id": 1,
    "name": "Protocol Upgrade",
    "perPrice": 13.4,
    "percIncr": 134.6,
    "color": "#61D4E5"
  },
  {
    "id": 2,
    "name": "Community development",
    "perPrice": 10.1,
    "percIncr": 101.6,
    "color": "#FEB752"
  },
  {
    "id": 3,
    "name": "Policy Changes",
    "perPrice": 10.0,
    "percIncr": 100.6,
    "color": "#FA7AC5"
  },
  {
    "id": 4,
    "name": "Governance",
    "perPrice": 9.9,
    "percIncr": 99.6,
    "color": "#14C784"
  },
]


export const GovProposalActAndVotersPart = {
  "proposalActivity": [
    {
      "rank": 1,
      "name": "Optimism",
      "sector": "Infrastructure",
      "proposals": "80K",
      "icon": "/daoIcons/counterparty.svg"
    },
    {
      "rank": 2,
      "name": "Steem",
      "sector": "Gaming",
      "proposals": "80K",
      "icon": "/daoIcons/bitcoin.svg"
    },
    {
      "rank": 3,
      "name": "Quant stamp",
      "sector": "Data",
      "proposals": "80K",
      "icon": "/daoIcons/nxt.svg"
    },
    {
      "rank": 4,
      "name": "Tezos",
      "sector": "Real world assets",
      "proposals": "80K",
      "icon": "/daoIcons/baelf.svg"
    },
    {
      "rank": 5,
      "name": "Quant stamp",
      "sector": "Data",
      "proposals": "80K",
      "icon": "/global.svg"
    },
    {
      "rank": 6,
      "name": "Quant stamp",
      "sector": "Data",
      "proposals": "80K",
      "icon": "/daoIcons/bytecoin.svg"
    },
    {
      "rank": 7,
      "name": "Quant stamp",
      "sector": "Data",
      "proposals": "80K",
      "icon": "/daoIcons/litecoin.svg"
    },
    {
      "rank": 8,
      "name": "Quant stamp",
      "sector": "Data",
      "proposals": "80K",
      "icon": "/daoIcons/dash.svg"
    },
    {
      "rank": 9,
      "name": "Shift",
      "sector": "Gaming",
      "proposals": "80K",
      "icon": "/daoIcons/ox.svg"
    },
    {
      "rank": 10,
      "name": "Shift",
      "sector": "Gaming",
      "proposals": "80K",
      "icon": "/daoIcons/aeon.svg"
    },
    {
      "rank": 11,
      "name": "Quantum",
      "sector": "Infrastructure",
      "proposals": "75K",
      "icon": "/daoIcons/wanchain.svg"
    },
    {
      "rank": 12,
      "name": "Nexus",
      "sector": "DeFi",
      "proposals": "72K",
      "icon": "/daoIcons/bitnew.svg"
    },
    {
      "rank": 13,
      "name": "Stellar",
      "sector": "Infrastructure",
      "proposals": "70K",
      "icon": "/xtrabyte.svg"
    },
    {
      "rank": 14,
      "name": "Cosmos",
      "sector": "Infrastructure",
      "proposals": "68K",
      "icon": "/daoIcons/counterparty.svg"
    },
    {
      "rank": 15,
      "name": "Polkadot",
      "sector": "Infrastructure",
      "proposals": "65K",
      "icon": "/daoIcons/bitcoin.svg"
    },
    {
      "rank": 16,
      "name": "Cardano",
      "sector": "DeFi",
      "proposals": "62K",
      "icon": "/daoIcons/nxt.svg"
    },
    {
      "rank": 17,
      "name": "Solana",
      "sector": "Gaming",
      "proposals": "60K",
      "icon": "/daoIcons/baelf.svg"
    },
    {
      "rank": 18,
      "name": "Avalanche",
      "sector": "DeFi",
      "proposals": "58K",
      "icon": "/global.svg"
    },
    {
      "rank": 19,
      "name": "Polygon",
      "sector": "Infrastructure",
      "proposals": "55K",
      "icon": "/daoIcons/bytecoin.svg"
    },
    {
      "rank": 20,
      "name": "Chainlink",
      "sector": "Data",
      "proposals": "52K",
      "icon": "/daoIcons/litecoin.svg"
    }
  ],
  "voterParticipation": [
    {
      "rank": 1,
      "name": "Optimism",
      "sector": "Infrastructure",
      "participation": "90%",
      "icon": "/daoIcons/dash.svg"
    },
    {
      "rank": 2,
      "name": "Steem",
      "sector": "Gaming",
      "participation": "88%",
      "icon": "/daoIcons/ox.svg"
    },
    {
      "rank": 3,
      "name": "Quant stamp",
      "sector": "Data",
      "participation": "87%",
      "icon": "/daoIcons/aeon.svg"
    },
    {
      "rank": 4,
      "name": "Tezos",
      "sector": "Real world assets",
      "participation": "86%",
      "icon": "/daoIcons/wanchain.svg"
    },
    {
      "rank": 5,
      "name": "Quant stamp",
      "sector": "Data",
      "participation": "85%",
      "icon": "/daoIcons/bitnew.svg"
    },
    {
      "rank": 6,
      "name": "Quant stamp",
      "sector": "Data",
      "participation": "84%",
      "icon": "/xtrabyte.svg"
    },
    {
      "rank": 7,
      "name": "Quant stamp",
      "sector": "Data",
      "participation": "83%",
      "icon": "/daoIcons/counterparty.svg"
    },
    {
      "rank": 8,
      "name": "Quant stamp",
      "sector": "Data",
      "participation": "82%",
      "icon": "/daoIcons/bitcoin.svg"
    },
    {
      "rank": 9,
      "name": "Shift",
      "sector": "Gaming",
      "participation": "81%",
      "icon": "/daoIcons/nxt.svg"
    },
    {
      "rank": 10,
      "name": "Shift",
      "sector": "Gaming",
      "participation": "80%",
      "icon": "/daoIcons/baelf.svg"
    },
    {
      "rank": 11,
      "name": "Quantum",
      "sector": "Infrastructure",
      "participation": "79%",
      "icon": "/global.svg"
    },
    {
      "rank": 12,
      "name": "Nexus",
      "sector": "DeFi",
      "participation": "78%",
      "icon": "/daoIcons/bytecoin.svg"
    },
    {
      "rank": 13,
      "name": "Stellar",
      "sector": "Infrastructure",
      "participation": "77%",
      "icon": "/daoIcons/litecoin.svg"
    },
    {
      "rank": 14,
      "name": "Cosmos",
      "sector": "Infrastructure",
      "participation": "76%",
      "icon": "/daoIcons/dash.svg"
    },
    {
      "rank": 15,
      "name": "Polkadot",
      "sector": "Infrastructure",
      "participation": "75%",
      "icon": "/daoIcons/ox.svg"
    },
    {
      "rank": 16,
      "name": "Cardano",
      "sector": "DeFi",
      "participation": "74%",
      "icon": "/daoIcons/aeon.svg"
    },
    {
      "rank": 17,
      "name": "Solana",
      "sector": "Gaming",
      "participation": "73%",
      "icon": "/daoIcons/wanchain.svg"
    },
    {
      "rank": 18,
      "name": "Avalanche",
      "sector": "DeFi",
      "participation": "72%",
      "icon": "/daoIcons/bitnew.svg"
    },
    {
      "rank": 19,
      "name": "Polygon",
      "sector": "Infrastructure",
      "participation": "71%",
      "icon": "/xtrabyte.svg"
    },
    {
      "rank": 20,
      "name": "Chainlink",
      "sector": "Data",
      "participation": "70%",
      "icon": "/daoIcons/counterparty.svg"
    }
  ]
}


export const GovFilters = {
  "sectors": [
   "All",
   "Open",
   "Closed",
   "Pending"
  ],
  "categories": [
    {
      "label": "All",
      "value": "all"
    },
    {
      "label": "Financial",
      "value": "financial",
    },
    {
      "label": "Governance",
      "value": "governance",
    },
    {
      "label": "Community dev.",
      "value": "community_dev",
    },
    {
      "label": "Operational",
      "value": "operational",
    },
    {
      "label": "Custom",
      "value": "custom",
    }
  ]
}


export const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/auth/dashboard' },
  { name: 'Finance', href: '/auth/finance' },
  { name: 'Governance', href: '/auth/governance' },
  { name: 'Resources', href: '/auth/resources' },
];

export const TrifectaData = [
  {
      title: "Governance",
      description: "View on and off-chain decisions across DAO ecosystems and sectors",
      icon: "/gov-icon.svg"
  },
  {
      title: "Finance",
      description: "Follow the money, including revenue and expenses across entire sectors",
      icon: "/fin-icon.svg"
  },
  {
      title: "Insights",
      description: "Unparalleled insight into the current and future health of DAOs",
      icon: "/insights-icon.svg"
  }
];
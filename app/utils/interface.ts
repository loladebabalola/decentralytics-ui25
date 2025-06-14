export type ImageNameValueDelta = {
    color: string,
    name: string,
    value:  number|string,
    delta: string
}

export type RangeProps = {
    first: number,
    second: number,
    third: number,
    fourth: number,
    year: string
}

export type DaoData = {
  rank: number;
  dao_name: string;
  treasury_value: string;
  change_24h: string;
  top_tokens: string[];
  native_chain: string;
  token_holders: string;
  proposals: number;
  active_participants: number;
  votes: string;
  bgColor: string;
  dao_logo: string;
  category: string;
};

export type DaoScreenProps = Pick<DaoData,
| "dao_name" | "rank" | "category" |"dao_logo" |"native_chain"|"proposals"| "token_holders"|"treasury_value"|"votes"|"bgColor">

export interface DAOMember {
  id:number;
  address: string;
  avatar: string;
  lastActive: string;
  votingPower: number;
  percentageOwnership: number;
  proposals: number;
  votes: {
    cast: number;
    total: number;
    percentage: number;
  };
  last5Proposals: string[];
  otherDAOsCount: number;
  otherDAOs: {
    name: string;
    icon: string;
  }[];
}

export type Activity = {
  id: number;
  type: string;
  title: string;
};


 export type RevOverTimeCardProps = {
  chartIcon: string,
  graphBg: string,
  graphImg: string,
  bgWidth: number,
  bgHeight: number,
  graphWidth: number,
  graphHeight: number,
  gap: number,
  revCardTitle: string,
  classForGraph: string
}

export interface ProposalItem {
  id: number;
  title: string;
  created: string;
  daoName: string;
  stage: string;
  status: string;
  category: string;
  sector: string;
  daoImage: string;
}

export type GovLeaderboardItem = {
  rank: number;
  name: string;
  sector: string;
  icon: string;
};

export type GovProposalActivityItem = GovLeaderboardItem & {
  proposals: string; // or number if you're using numeric format
};

export type GovVoterParticipationItem = GovLeaderboardItem & {
  participation: string; // e.g., "90%"
};

export type GovLeaderboardData = {
  proposalActivity: GovProposalActivityItem[];
  voterParticipation: GovVoterParticipationItem[];
};

export type TrifectaDataProps = {
  title: string;
  description: string;
  icon: string;
};

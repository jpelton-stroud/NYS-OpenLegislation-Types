interface CommitteeId {
  chamber: string;
  name: string;
}
interface MemberList {
  items: BillSponsor[];
  size: number;
}
interface BillStatus {
  statusType: string;
  statusDesc: string;
  actionDate: string;
  committeeName: string;
  billCalNo: null;
}

interface BillId {
  basePrintNo: string;
  session: number;
  basePrintNoStr: string;
  printNo: string;
  version: string;
}

interface BillSponsor {
  memberId: number;
  chamber: string;
  incumbent: boolean;
  fullName: string;
  shortName: string;
  imgName: string;
  sessionMemberId: number;
  sessionYear: number;
  districtCode: number;
  alternate: boolean;
}

interface Bill {
  basePrintNo: string;
  session: 2013;
  basePrintNoStr: string;
  printNo: string;
  billType: {
    chamber: string;
    desc: string;
    resolution: boolean;
  };
  title: string;
  activeVersion: string;
  year: 0;
  publishedDateTime: string;
  substitutedBy: null;
  sponsor: {
    member: BillSponsor;
    budget: boolean;
    rules: boolean;
  };
  reprintOf: string;
  summary: string;
  signed: boolean;
  adopted: boolean;
  vetoed: boolean;
  status: BillStatus;
  milestones: { items: BillStatus[]; size: number };
  actions: {
    items: {
      billId: BillId;
      date: string;
      chamber: string;
      sequenceNo: number;
      text: string;
    }[];
    size: number;
  };
  publishStatusMap: {
    items: {
      [key: string]: {
        version: string;
        published: boolean;
        effectDateTime: string;
      };
    };
    size: number;
  };
  programInfo: null;
  amendmentVersions: { items: string[]; size: number };
  amendments: {
    items: {
      [key: string]: {
        basePrintNo: string;
        session: 2013;
        basePrintNoStr: string;
        printNo: string;
        version: string;
        publishDate: string;
        sameAs: { items: BillId[]; size: number };
        memo: string;
        lawSection: string;
        lawCode: string;
        actClause: string;
        fullTextFormats: string[];
        fullText: string;
        fullTextHtml: string;
        fullTextTemplate: string;
        coSponsors: MemberList;
        multiSponsors: MemberList;
        uniBill: boolean;
        relatedLaws: { items: {}; size: number };
        stricken: boolean;
      };
    };
    size: number;
  };
  votes: {
    items: {
      billId: BillId;
      version: string;
      voteType: string;
      voteDate: string;
      committee: CommitteeId;
      memberVotes: {
        items: {
          //key values AYE, EXC, AYEWR, NAY
          [key: string]: MemberList;
        };
        size: number;
      };
    }[];
    size: number;
  };
  vetoMessages: { items: []; size: number };
  approvalMessage: string;
  additionalSponsors: MemberList;
  pastCommittees: {
    items: {
      chamber: string;
      name: string;
      sessionYear: number;
      referenceDate: string;
    }[];
    size: number;
  };
  previousVersions: { items: BillId[]; size: number };
  committeeAgendas: {
    items: {
      agendaId: { number: number; year: number };
      committeeId: CommitteeId;
    }[];
    size: number;
  };
  calendars: {
    items: { year: 2013; calendarNumber: 32 }[];
    size: number;
  };
}

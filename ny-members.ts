interface SessionMember {
  sessionMemberId: number;
  shortName: string;
  sessionYear: number;
  districtCode: number;
  alternate: boolean;
  memberId: number;
}

interface Person {
  personId: number;
  fullName: string;
  firstName: string;
  middleName: string | null;
  lastName: string;
  email: string | null;
  prefix: string;
  suffix: string | null;
  verified: boolean;
  imgName: string | null;
}

interface Member extends SessionMember {
    chamber: "ASSEMBLY" | "SENATE";
    incumbent: boolean;
    fullName: string;
    imgName: string | null;
    sessionShortNameMap: { 
        [key:string]: SessionMember[];
    },
    person: Person;
}
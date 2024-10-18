type IdentificationModule = {
  briefTitle?: string;
  officialTitle?: string;
  nctId?: string;
};

type DescriptionModule = {
  briefSummary?: string;
  detailedDescription?: string;
};

type ProtocolSection = {
  descriptionModule?: DescriptionModule;
  identificationModule?: IdentificationModule;
};

declare type TrialSearchResultSimplified = {
  objectID?: string;
  hasResults?: boolean;
  protocolSection?: ProtocolSection;
};

declare type Trial = {
  briefTitle: string;
  summary: string;
  fullTitle: string;
  description: string;
  nctId: string;
  dbId: string;
  hasResults: boolean;
};

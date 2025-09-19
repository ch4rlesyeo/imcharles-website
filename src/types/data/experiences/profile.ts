export interface IProfileDescription {
  description: string;
  details?: string[];
}

export interface IProfileSelectorProps {
  range: string;
  rangeDetail: string;
  company: string;
  jobTitle: string;
  descriptions: IProfileDescription[];
}

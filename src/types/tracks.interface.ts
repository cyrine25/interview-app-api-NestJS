export interface SeniorityLevel {
  id: number;
  level: string;
}

export interface Tracks {
  id: number;
  track: string;
  seniority_levels: ReadonlyArray<SeniorityLevel>;
}

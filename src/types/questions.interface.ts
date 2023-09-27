export interface Question {
  id: number;
  title: string;
  answer: string;
  tags: ReadonlyArray<Tag>;
}
export type Tag = {
  value: string;
};

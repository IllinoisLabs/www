export type url = `${'http://' | 'https://'}${string}`;
export type orgPosition = 'Software Developer' | 'Project Lead';

export interface member {
  name: string;
  image: string;
  position: orgPosition;
  linkedin?: url;
  github?: url;
  website?: url;
}

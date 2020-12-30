export type url = `${'http://' | 'https://'}${string}`;
export type orgPosition = 'Developer' | 'Lead' | 'Designer';

export interface Member {
  name: string;
  image: string;
  position: orgPosition;
  linkedin?: url;
  github?: url;
  website?: url;
}

export interface post {
  title: string;
  slug: string;
  html: string;
}

export interface post_detailed extends post {
  description: string;
}

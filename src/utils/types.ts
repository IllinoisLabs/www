export type url = `${'http://' | 'https://'}${string}`;
export type orgPosition = 'Software Developer' | 'Project Lead';

export interface member {
  name: string;
  image: string;
  slug: string;
  description: string;
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

export interface post_detailed {
  title: string;
  description: string;
  slug: string;
  html: string;
}

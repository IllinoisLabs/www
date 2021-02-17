/* Helpers */
export type url = `${'http://' | 'https://'}${string}`;

/* Content */
export interface Member {
  name: string;
  image: string;
  position: string;
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

/* Forms */

export interface FormType {
  formLabel: string;
  formName: string;
  formDesc?: string;
  blocks: FormBlock[];
  isOpen: boolean;
}

export interface FormBlock {
  label: string;
  name: string;
  required: boolean;
  desc?: string;
  value?: string;
}

export interface FormBlockTextArea extends FormBlock {
  rows: number;
  maxChar?: number;
  minChar?: number;
  placeholder?: string;
}

export interface FormBlockInput extends FormBlock {
  placeholder: string;
  type?: string;
}

export interface FormBlockSelect extends FormBlock {
  options: string[];
  allowMultiple?: boolean;
}

export interface FormBlockUpload extends FormBlock {
  acceptableTypes: string[] | null;
}

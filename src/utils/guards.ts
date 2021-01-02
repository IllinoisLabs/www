import type { FormBlock, FormBlockInput, FormBlockSelect, FormBlockTextArea, FormBlockUpload } from '../utils/types';

function isFormBlock(obj: any): obj is FormBlock {
  return 'label' in obj && 'name' in obj && 'required' in obj;
}

function isFormBlockInput(obj: any): obj is FormBlockInput {
  return isFormBlock(obj) && 'placeholder' in obj;
}

function isFormBlockSelect(obj: any): obj is FormBlockSelect {
  return isFormBlock(obj) && 'options' in obj;
}

function isFormBlockTextArea(obj: any): obj is FormBlockTextArea {
  return isFormBlock(obj) && 'rows' in obj;
}

function isFromBlockUpload(obj: any): obj is FormBlockUpload {
  return isFormBlock(obj) && 'acceptableTypes' in obj;
}

export const FormGuards = {
  isFormBlock,
  isFormBlockInput,
  isFormBlockSelect,
  isFormBlockTextArea,
  isFromBlockUpload,
};

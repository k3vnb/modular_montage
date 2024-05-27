type TAriaDescribedBy = {
  ['aria-describedby']?: string;
};

type THelpTextAttributes = {
  helpTextId: string; // add to the help text
  ariaDescribedByProps: TAriaDescribedBy; // add to the input field
};
  
export const getAttributesForHelpText = (fieldId: string, helpText: string): THelpTextAttributes => {
  const helpTextId = fieldId ? `${fieldId}--help-text` : '';
  const ariaDescribedByProps = helpText ? { 'aria-describedby': helpTextId } : {};

  return {
    helpTextId,
    ariaDescribedByProps,
  };
};

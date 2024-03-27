import { FC } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { useField } from 'formik';


interface TextfieldWrapperProps {
  name: string;
  label:string;
  type:string;
}

const TextfieldWrapper: FC<TextfieldWrapperProps> = ({
  name,
  ...otherProps
}) => {
  const [field, meta] = useField(name);

  const configTextfield: TextFieldProps = {
    ...field,
    ...otherProps,
    sx:{width:210},
    variant: 'outlined',
    autoComplete:'off',
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return (
    <TextField {...configTextfield} />
  );
};

export default TextfieldWrapper;
import React, { FC } from 'react';
import { Button, ButtonProps } from '@mui/material';
import { useFormikContext } from 'formik';

interface ButtonWrapperProps extends ButtonProps {
  children: React.ReactNode;
}

const ButtonWrapper: FC<ButtonWrapperProps> = ({
  children,
  ...otherProps
}) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  }

  const configButton: ButtonProps = {
    variant: 'contained',
    color: 'success',
    onClick: handleSubmit,
  }

  return (
    <Button
      {...configButton}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default ButtonWrapper;
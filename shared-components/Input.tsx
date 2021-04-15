import React from "react";
import { FormInputProps, Input } from "semantic-ui-react";

const SharedInput: React.FC<FormInputProps> = ({ label, placeholder }) => {
  return (
    <Input
      label={label}
      placeholder={placeholder}
    />
  );
}

export default SharedInput;
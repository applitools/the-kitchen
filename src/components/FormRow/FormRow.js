import { FormControl } from "@chakra-ui/react"

import styles from './FormRow.module.scss';

const FormRow = ({ children, className, ...rest }) => {
  let formRowClassName = styles.formRow;

  if ( className ) {
    formRowClassName = `${formRowClassName} ${className}`;
  }

  return (
    <FormControl className={formRowClassName} {...rest}>
      { children }
    </FormControl>
  )
}

export default FormRow;
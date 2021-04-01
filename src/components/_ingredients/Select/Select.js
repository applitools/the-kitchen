import { Select as ChakraSelect } from '@chakra-ui/react';

import styles from './Select.module.scss';

const Select = ({ id, name, label, options, ...rest }) => {
  return (
    <div className={`ingredient ${styles.select}`}>
      <ChakraSelect id={id} name={name} {...rest}>
        {options.map(({ label, value, ...rest }) => {
          return (
            <option key={value} value={value} {...rest}>
              { label }
            </option>
          );
        })}
      </ChakraSelect>
    </div>
  )
}

export default Select;
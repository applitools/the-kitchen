import { Box } from '@chakra-ui/react'

import styles from './Section.module.scss';

const Section = ({ children, className, backgroundColor, ...rest }) => {
  let sectionClassName = styles.section;

  if ( className ) {
    sectionClassName = `${sectionClassName} ${className}`;
  }

  return (
    <Box as="section" className={sectionClassName} data-background-color={backgroundColor} {...rest}>
      { children }
    </Box>
  )
}

export default Section;
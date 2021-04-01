import { Container, Box, Text } from '@chakra-ui/react';

import Section from '@components/Section';
import Applitools from '@components/Applitools';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <Box as="footer" bg="gray.100">
      <Section m="0">
        <Container textAlign="center" maxW="4xl">
          <Text color="gray.600">
            <a className={styles.footerText} href="https://www.applitools.com" target="_blank" rel="noopener noreferrer">
              Powered by <Applitools className={styles.footerLogo} />
            </a>
          </Text>
        </Container>
      </Section>
    </Box>
  )
}

export default Footer;
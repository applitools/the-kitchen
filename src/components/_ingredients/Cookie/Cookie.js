import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Box, Heading } from '@chakra-ui/react';

import styles from './Cookie.module.scss';

const Cookie = ({ id, name, value, label }) => {
  const cookieConfig = { path: '/' };

  const [cookies, setCookie] = useCookies([name]);

  if ( !id ) {
    id = name;
  }

  useEffect(() => {
    setCookie(name, value, cookieConfig)
  }, []);

  return (
    <Box as="div" id={id} className={styles.cookie} marginBottom={10}>
      <Heading as="h2" fontSize={22} marginBottom={5}>{ label }</Heading>
      <p>
        Name: <span id={`${id}-cookie-name`}>{ name }</span>
      </p>
      <p>
        Default Value: <span id={`${id}-cookie-value`}>{ cookies[name] }</span>
      </p>
    </Box>
  )
}

export default Cookie;
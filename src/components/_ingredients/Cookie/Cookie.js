import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Box, Flex, Heading, FormLabel, Button, Input, Stack, VisuallyHidden } from '@chakra-ui/react';


import Form from '@components/Form';
import FormRow from '@components/FormRow';

import styles from './Cookie.module.scss';

const Cookie = ({ id, label, name, defaultValue }) => {
  const cookieConfig = { path: '/' };

  const [cookies, setCookie, removeCookie] = useCookies([name]);

  const [value, setValue] = useState(defaultValue);

  if ( !id ) {
    id = name;
  }

  function handleSetCookie() {
    setCookie(name, value, cookieConfig);
  }

  function handleDeleteCookie() {
    removeCookie(name, cookieConfig);
  }

  return (
    <Box as="div" id={id} className={styles.cookie} marginBottom={10}>

      <Heading as="h2" fontSize={22} marginBottom={5}>{ label }</Heading>

      <Form>
        <Flex align="flex-start">
          <FormRow id="set-cookie">
            <Heading as="h3" fontSize={16} marginBottom={5}>Manage Cookie</Heading>
            <Stack spacing={3}>
              <p>
                <Stack spacing={3}>
                  <VisuallyHidden>
                    <FormLabel fontWeight="bold" >Change Cookie Value</FormLabel>
                  </VisuallyHidden>
                  <Input value={value} onChange={(e) => setValue(e.currentTarget.value)} />
                </Stack>
              </p>
              <p>
                <Button id={`${id}-cookie-set`} colorScheme="blue" onClick={handleSetCookie} marginRight={2}>
                  Set Cookie
                </Button>
                <Button id={`${id}-cookie-delete`} colorScheme="blue" onClick={handleDeleteCookie}>
                  Delete Cookie
                </Button>
              </p>
            </Stack>
          </FormRow>
          <Box width={500} marginLeft={10}>
            <Heading as="h3" fontSize={16} marginBottom={5}>Cookie Value</Heading>
            <p>
              Name: <span id={`${id}-cookie-name`}>{ name }</span>
            </p>
            <p>
              Value: <span id={`${id}-cookie-value`}>{ cookies[name] }</span>
            </p>
          </Box>
        </Flex>
      </Form>

    </Box>
  )
}

export default Cookie;
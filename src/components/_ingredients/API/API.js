import { useState, useEffect } from 'react';
import { Box, Button, Code } from "@chakra-ui/react"

import styles from './API.module.scss';

const API = ({ children, id, url }) => {

  const [response, setResponse] = useState();

  useEffect(() => getApi(), [])

  async function getApi() {
    const response = await fetch(url);
    const json = await response.json();
    setResponse(json);
  }

  return (
    <div id={id} className={styles.api}>
      <div className={styles.apiResponse}>
        <Code px="4" mt="4"><pre>{ JSON.stringify(response, null, 2) }</pre></Code>
        <Box as="p" mt="4">
          <Button id={`${id}-button`} colorScheme="blue" onClick={() => getApi()}>
            Refresh
          </Button>
        </Box>
      </div>
      <div className={styles.apiChild}>
        { children(response) }
      </div>
    </div>
  )
}

export default API;
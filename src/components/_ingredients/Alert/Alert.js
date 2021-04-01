import { useState } from 'react';
import { Button } from "@chakra-ui/react"

import styles from './Alert.module.scss';

const Alert = ({ id, method = 'alert', message, label }) => {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState();

  id = id || method;

  function handleOnClick () {
    const result = window[method](message);

    if ( typeof result === 'boolean' ) {
      setAnswer(result ? 'Yes' : 'No');
    } else if ( typeof result === 'string' ) {
      setAnswer(result);
    } else if ( result === null ) {
      setAnswer('Cancelled')
    }
    
    setCount(count + 1)
  }

  return (
    <div id={id} className={styles.alert}>
      <p>
        <Button id={`${id}-button`} colorScheme="blue" onClick={handleOnClick}>
          { label }
        </Button>
      </p>
      <p id={`${id}-count`}>
        Triggered {count} time(s).
      </p>
      {answer && (
        <p id={`${id}-answer`}>
          Answer: { answer }
        </p>
      )}
    </div>
  )
}

export default Alert;
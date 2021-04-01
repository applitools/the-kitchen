import { useState, useEffect, useRef } from 'react';
import { Button } from "@chakra-ui/react"

import styles from './Notification.module.scss';

const Notification = ({ id, label, message }) => {
  const permissionCheckRef = useRef();
  const [permission, setPermission] = useState();

  const isPermissionGranted = permission === 'granted';

  useEffect(() => {
    if (!("Notification" in window)) {
      setPermission('Browser not supported!')
      return;
    }

    permissionCheckRef.current = setInterval(() => {
      if ( window.Notification && window.Notification.permission === permission ) return;
      setPermission(window.Notification.permission);
    }, 1000);

    () => {
      clearInterval(permissionCheckRef.current);
    }
  }, []);

  useEffect(() => {
    if ( permission !== 'granted') {
      window.Notification.requestPermission().then(permission => {
        setPermission(permission);
      });
    }
  }, [permission])

  function handleOnClick () {
    if ( isPermissionGranted ) {
      new window.Notification(message);
    } else {
      alert('Permission required to send notification!');
    }
  }

  return (
    <div id={id} className={styles.notification}>
      <p>
        <Button id={`${id}-button`} colorScheme="blue" onClick={handleOnClick}>
          { label }
        </Button>
      </p>
      <p id={`${id}-permission`}>
        Permission Status: { permission }
      </p>
    </div>
  )
}

export default Notification;
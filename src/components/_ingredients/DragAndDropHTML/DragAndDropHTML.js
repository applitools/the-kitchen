import { useState } from 'react';
import { Heading, Button } from '@chakra-ui/react';

import styles from './DragAndDropHTML.module.scss';

const DragAndDropHTML = ({ menuItems }) => {

  const [items, setItems] = useState({});
  const hasItems = Object.keys(items).length > 0;

  /**
   * allowDrop
   */

  function allowDrop(event) {
    event.preventDefault();
  }

  /**
   * drag
   */
  
  function drag(event) {
    const id = event.target.dataset.id;
    event.dataTransfer.setData('text', id);
  }

  /**
   * drop
   */
  
  function drop(event) {
    event.preventDefault();

    const id = event.dataTransfer.getData('text');
    const item = menuItems.find(item => item.id === id);

    setItems(prev => {
      return {
        ...prev,
        [id]: item
      }
    })
  }

  /**
   * handleOnClick
   */

  function handleOnClick() {
    setItems({});
  }

  return (
    <div className={styles.draganddrop}>
      <div className={styles.food}>
        <div id="menu" className={styles.menu}>
          <Heading as="h3" fontSize={18} marginBottom={5}>Menu</Heading>
          <ul id="menu-items" onDragOver={allowDrop} onDragStart={drag}>
            {menuItems.map(({ id, name }) => {
              return (
                <li key={id} id={`menu-${id}`} draggable data-id={id}>
                  { name }
                </li>
              )
            })}
          </ul>
        </div>

        <div id="plate" className={styles.plate} data-has-items={hasItems}>
          <Heading as="h3" fontSize={18} marginBottom={5}>Order Ticket</Heading>
          <ul id="plate-items" onDragOver={allowDrop} onDrop={drop}>
            {hasItems && Object.keys(items).map(key => {
              const { id, name } = items[key];
              return (
                <li key={id} id={`plate-${id}`} draggable>
                  { name }
                </li>
              )
            })}
            {!hasItems && (
              <li>Drag an item from the menu to start your order!</li>
            )}
          </ul>
        </div>
      </div>
      <p className={styles.actions}>
        <Button id="reset-button" colorScheme="blue" onClick={handleOnClick}>
          Reset Order
        </Button>
      </p>
    </div>
  )
}

export default DragAndDropHTML;
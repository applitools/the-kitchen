import { useState } from 'react';
import { DragDropContext, Droppable, Draggable, resetServerContext } from 'react-beautiful-dnd';
import { Heading, Button } from '@chakra-ui/react';

import styles from './DragAndDropReact.module.scss';

const DragAndDropReact = ({ menuItems: defaultMenuItems, ...rest }) => {

  const [menuItems, updateMenuItems] = useState(defaultMenuItems);

  /**
   * handleOnDragEnd
   */

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(menuItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateMenuItems(items);
  }

  /**
   * handleOnClick
   */

  function handleOnClick() {
    updateMenuItems(defaultMenuItems);
  }

  resetServerContext();

  return (
    <div className={styles.draganddrop} {...rest}>
      <Heading as="h3" fontSize={18} marginBottom={5}>Favorite Sides</Heading>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="menuItems">
          {(provided) => (
            <ul className={styles.menuItems} {...provided.droppableProps} ref={provided.innerRef}>
              {menuItems.map(({id, name}, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li id={`sides-${id}`} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        { name }
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <p className={styles.actions}>
        <Button id="reset-button" colorScheme="blue" onClick={handleOnClick}>
          Reset Order
        </Button>
      </p>
    </div>
  )
}

export default DragAndDropReact;



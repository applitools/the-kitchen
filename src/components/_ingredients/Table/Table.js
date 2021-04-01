import { useState } from 'react';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

import styles from './Table.module.scss';

const SORT_ORDERS = [
  'asc',
  'dsc'
]

const Table = ({ columns, data, ...rest }) => {

  const [sortId, setSortId] = useState();
  const [sortOrder, setSortOrder] = useState(SORT_ORDERS[0]);

  const rows = data.map((row, rowIndex) => {
    return {
      id: rowIndex,
      cells: row.map((cell, cellIndex) => {
        const column = columns[cellIndex];
        return {
          id: `${rowIndex}-${cellIndex}`,
          Cell: cell,
          column
        }
      })
    }
  });
  
  if ( sortId ) {
    rows.sort(( a, b ) => {
      const aCell = a.cells.find(({ column }) => column.id === sortId);
      const columnIndex = columns.findIndex(({ id }) => id === aCell.column.id);

      const cellA = a.cells[columnIndex].Cell;
      const cellB = b.cells[columnIndex].Cell;

      if ( sortOrder === 'asc' ) {
        if ( cellA < cellB ) return -1;
        if ( cellA > cellB ) return 1;
      } else if ( sortOrder === 'dsc' ) {
        if ( cellA > cellB ) return -1;
        if ( cellA < cellB ) return 1;
      }

      return 0;
    });
  }

  /**
   * handleOnSort
   */

  function handleOnSort({ currentTarget }) {
    const id = currentTarget.id.replace('column-button-', '');
    
    if ( sortId === id ) {
      const currentSortIndex = SORT_ORDERS.findIndex(index => index === sortOrder);
      let newSortIndex = currentSortIndex + 1;
      
      if ( newSortIndex + 1 > SORT_ORDERS.length ) {
        setSortOrder(SORT_ORDERS[0]);
        setSortId();
        return;
      }

      setSortOrder(SORT_ORDERS[newSortIndex]);
    } else {
      setSortId(id);
      setSortOrder(SORT_ORDERS[0]);
    }
  }

  return (
    <div className={styles.table}>
      <p className={styles.tableNote}>
        Click on a column header to sort!
      </p>
      <table {...rest}>
        <thead>
          <tr>
            {columns.map(({ id, Label }) => {
              return (
                <th key={id}>
                  <button id={`column-button-${id}`} onClick={handleOnSort} aria-label={`Sort by ${id}`}>
                    <span className={styles.columnHeaderLabel}>
                      { Label }
                    </span>
                    { sortId === id && (
                      <span className={styles.columnHeaderSort}>
                        { sortOrder === 'asc' && (
                          <FaCaretUp />
                        ) }
                        { sortOrder === 'dsc' && (
                          <FaCaretDown />
                        ) }
                      </span>
                    ) }
                  </button>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ id, cells }) => {
            return (
              <tr key={id}>
                {cells.map(({ id, Cell }) => {
                  return (
                    <td key={id}>
                      { Cell }
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table;
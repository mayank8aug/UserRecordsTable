import React from 'react';
import { useDispatch } from 'react-redux';
import { sortBy } from '../actions';
import './UserRecordsHeader.css';

const UserRecordsHeader = React.memo(props => {
  const dispatch = useDispatch();
  const { headers } = props;
  
  return (
    <thead>
      {headers.map(header => {
        return (
          <th key={header.id} className="user-header">
            <span
              className={header.sortable ? "sort-by" : ""}
              onClick={() => {
                if (header.sortable) dispatch(sortBy(header.id));
              }}
            >
              {header.label}
            </span>
          </th>
        );
      })}
    </thead>
  );
});

export default UserRecordsHeader;

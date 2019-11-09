import React from 'react';
import { useSelector } from 'react-redux';
import './UserRecordsData.css';

const UserRecordsData = React.memo(props => {
  const userState = useSelector(state => state.user);
  const { sortByField, sortOrder, filterQuery } = userState;
  let { users, filterableFields } = props;

  if (filterQuery) {
    users = users.filter(user => {
      return user.data.some(field => filterableFields.includes(field.id) && field.value.toLowerCase().includes(filterQuery.toLowerCase()));
    });
  }

  if (sortByField) {
    users = users.sort((u1, u2) => {
      const u1Val = u1.data.find(field => field.id === sortByField).value;
      const u2Val = u2.data.find(field => field.id === sortByField).value;
      if (u1Val < u2Val) {
        return sortOrder === 'ASC' ? -1 : 1;
      }
      if (u1Val > u2Val) {
        return sortOrder === 'ASC' ? 1 : -1;
      }
      return 0;
    });
  }
  
  return (
    <tbody className="user-list">
      {users &&
        users.map(user => {
          return (
            <tr key={user.id}>
              {user.data &&
                user.data.map(field => {
                  return <td key={`${user.id}-${field.id}`}>{field.value}</td>;
                })}
            </tr>
          );
        })}
    </tbody>
  );
});

export default UserRecordsData;

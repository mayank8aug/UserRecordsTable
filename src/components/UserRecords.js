import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserRecordsHeader from './UserRecordsHeader';
import UserRecordsData from './UserRecordsData';

const UserRecords = React.memo(() => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const result = await axios('https://mayank8aug.github.io/Airflex/data.json');
      setUserData(result.data);
    }
    fetchData();
  }, []);

  const { columnHeaders = [], rowData = [] } = userData;
  const filterableFields = columnHeaders.reduce((memo, header) => {
    if (header.filterable) memo.push(header.id);
    return memo;
  }, []);
  
  return (
    <table id="users">
      <UserRecordsHeader headers={columnHeaders} />
      <UserRecordsData users={rowData} filterableFields={filterableFields} />
    </table>
  );
});

export default UserRecords;
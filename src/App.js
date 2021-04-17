import React, { useEffect } from 'react'
import Header from './containers/Header/Header'
import Table from './containers/Table/Table';
import AddLine from './containers/AddLine/AddLine'
import mysql from 'mysql'


let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "users",
  password: "Pr0gresstech00++",
  port: 3306,
})

function App() {

  useEffect(() => {

  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <AddLine />
        <Table />
      </div>
    </>
  );
}

export default App;

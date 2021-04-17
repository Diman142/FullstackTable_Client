import React, { useEffect } from 'react'
import Header from './containers/Header/Header'
import Table from './containers/Table/Table';
import AddLine from './containers/AddLine/AddLine'


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

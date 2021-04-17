import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import classes from './Table.module.css'
import Button from '../../components/Button/Button'
import {clearNewData, addToTable} from '../../redux/actions/actions'
import axios from 'axios'
import Loader from "react-loader-spinner";

const Table = ({tableData, newInfo, clearNew, renderData}) => {

  const [retention, setRetention] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  const sendData = () => {
    axios.post('http://localhost:3001/api/insert', {
      newInfo
    }).then(() => {
      alert('Successful insert')
    }).catch(e => {
      console.log(e)
    })
  };

  useEffect(() => {
    axios.get('http://localhost:3001/api/get').then(response => {

      console.log(response)
      let arr = []

      response.data.forEach(item => {
        let obj = {}

        obj.UserID = item.UserID
        obj.Data_Registration = item.Data_Registration.slice(0, 10).split('-').reverse().join('-')
        obj.Last_Activity = item.Last_Activity.slice(0, 10).split('-').reverse().join('-')

        arr.push(obj)
      })

      setIsLoaded(true)
      renderData(arr)
    })
  }, [])


  const calculate = () => {

    axios.get('http://localhost:3001/api/calc').then(resp => {

      let rec = Math.trunc((+resp.data[1].users / +resp.data[0].users) * 100)

      setRetention(rec)
    })
  }

  if(!isLoaded){
    return (
      <Loader
      type="TailSpin"
      color="#5D6D97"
      height={100}
      width={100}
      className="tac"
    />
    )
  }


  return (
    <>
      <table className={classes.Table}>

        <thead>
          <tr className={classes.TableHeader}>
            <th className={classes.TableHeaderRow}>UserID</th>
            <th className={classes.TableHeaderRow}>Date Registration</th>
            <th className={classes.TableHeaderRow} >Date Last Activity</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((row, index) => {
            return (
              <tr className={classes.TableData} key={Date.now() + index}>
                <td className={classes.TableDataRow}>{row.UserID}</td>
                <td className={classes.TableDataRow}> {row.Data_Registration}</td>
                <td className={classes.TableDataRow}>{row.Last_Activity}</td>
              </tr>
            )
          })}
        </tbody>

      </table>
      <div className ={classes.TableBtnContainer}>
        <Button title="Save" className={classes.TableSaveBtn} onClick={() => {
          sendData();
          clearNew();
        }}/>
        <Button title="Calculate" className={classes.TableCalcBtn} onClick={() => {
          calculate();
        }}/>
      </div>
      {retention ? <p className={classes.TableNote}>Rolling Retention 7 day = {retention}%</p> : null}


    </>
  )
}


const mapStateToProps = (state) => ({
  tableData: state.changedate.data,
  newInfo: state.changedate.newData,

});


const mapDispatchToProps = (dispatch) => {
  return {
    clearNew: () => {dispatch(clearNewData())},
    renderData: (data) => {dispatch(addToTable(data))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
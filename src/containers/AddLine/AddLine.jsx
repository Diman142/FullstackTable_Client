import React, {useState, useEffect} from 'react'
import classes from './AddLine.module.css'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import {connect} from 'react-redux'
import {addToTable, changeUserId, changeRegData, changeLastAct, addNewData} from '../../redux/actions/actions'
import {validate} from '../../helpers/helpers'


const AddLine = ({tableData, addLine, userId, RegDate, LastAct, changeId, changeReg, changeAct, newInfo, addNew}) => {

  const [isValid, setIsValid] = useState(false)

  useEffect(() => {

    let userIdFlag = validate(userId, "id")
    let RegDateFlag = validate(RegDate, "date")
    let LastActFlag = validate(LastAct, "date")

    if(userIdFlag && RegDateFlag && LastActFlag){
      setIsValid(true)
    } else {
      setIsValid(false)
    }

  }, [RegDate, LastAct, userId]);




  return (
    <form className={classes.Form}>
      <h2 className={classes.FormTitle}>Add user into the Table</h2>
      <div className={classes.FormWrap}>
        <Input type="number" onChange={changeId} value={userId} placeholder= "Enter user id" id="userId" label="Only number" validType="id" errMessage="Enter id > 0"/>
        <Input type="text" onChange={changeReg} value={RegDate} placeholder= "Enter Reg Date" id="userRegField" label="User Reg Date" validType="date" errMessage="Date format: 12-12-2020"/>
        <Input type="text" onChange={changeAct} value={LastAct} placeholder= "Enter Last Date" id="userLastField" label="User Last Visit" validType="date" errMessage="Date format: 12-12-2020"/>
      </div>


      <Button disClass="btn-dis" type="submit" title="Add user" disabled={!isValid} className="mt-40" onClick={(event) => {
        event.preventDefault()

        let currentData = [...tableData]
        let newData = [...newInfo]
        let id = currentData.length+1

        let obj = {
          id: id,
          UserID: userId,
          Data_Registration: RegDate,
          Last_Activity: LastAct,
        }

        console.log(obj)
        currentData.push(obj)

        console.log(currentData)
        addLine(currentData)



        obj.Data_Registration = obj.Data_Registration.split('-').reverse().join('-')
        obj.Last_Activity = obj.Last_Activity.split('-').reverse().join('-')

        newData.push(obj);
        addNew(newData)

      }}/>

    </form>
  )
}

const mapStateToProps = (state) => ({
  tableData: state.changedate.data,
  userId: state.changeInput.userId,
  RegDate: state.changeInput.regData,
  LastAct: state.changeInput.lastAct,
  newInfo: state.changedate.newData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addLine: (lineData) => {dispatch(addToTable(lineData))},
    changeId: (userId) => {dispatch(changeUserId(userId))},
    changeReg: (reg) => {dispatch(changeRegData(reg))},
    changeAct: (last) => {dispatch(changeLastAct(last))},
    addNew: (newDate) => {dispatch(addNewData(newDate))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLine);




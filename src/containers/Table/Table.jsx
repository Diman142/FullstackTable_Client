/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-named-as-default */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import classes from './Table.module.css';
import Button from '../../components/Button/Button';
import { clearNewData, addToTable, clearTable } from '../../redux/actions/actions';

const Table = ({ tableData, newInfo, clearNew, renderData, clearData }) => {
  const [retention, setRetention] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const sendData = () => {
    axios
      .post('https://tranquil-atoll-99499.herokuapp.com/api/insert', {
        newInfo,
      })
      .then(() => {
        // eslint-disable-next-line no-alert
        alert('Successful insert');
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e);
      });
  };

  useEffect(() => {
    axios.get('https://tranquil-atoll-99499.herokuapp.com/api/get').then((response) => {
      const arr = [];

      if (response.data.length) {
        response.data.forEach((item) => {
          const obj = {};

          obj.UserID = item.UserID;
          obj.Data_Registration = item.Data_Registration.slice(0, 10)
            .split('-')
            .reverse()
            .join('-');
          obj.Last_Activity = item.Last_Activity.slice(0, 10).split('-').reverse().join('-');

          arr.push(obj);
        });
      }

      setIsLoaded(true);
      renderData(arr);
    });
  }, []);

  const calculate = () => {
    axios.get('https://tranquil-atoll-99499.herokuapp.com/api/calc').then((resp) => {

      let rec = 0;

      if (resp.data.length > 1) {
        rec = Math.trunc((+resp.data[1].users / +resp.data[0].users) * 100);
      }

      setRetention(rec);
    });
  };

  const clear = () => {
    axios.get('https://tranquil-atoll-99499.herokuapp.com/api/delete').then(() => {
      clearData();
    });
  };

  if (!isLoaded) {
    return <Loader type="TailSpin" color="#5D6D97" height={100} width={100} className="tac" />;
  }

  return (
    <>
      <table className={classes.Table}>
        <thead>
          <tr className={classes.TableHeader}>
            <th className={classes.TableHeaderRow}>UserID</th>
            <th className={classes.TableHeaderRow}>Date Registration</th>
            <th className={classes.TableHeaderRow}>Date Last Activity</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((row, index) => (
              <tr className={classes.TableData} key={Date.now() + index}>
                <td className={classes.TableDataRow}>{row.UserID}</td>
                <td className={classes.TableDataRow}> {row.Data_Registration}</td>
                <td className={classes.TableDataRow}>{row.Last_Activity}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className={classes.TableBtnContainer}>
        <Button
          title="Save"
          className={classes.TableSaveBtn}
          onClick={() => {
            sendData();
            clearNew();
          }}
        />
        <Button
          title="Calculate"
          className={classes.TableCalcBtn}
          onClick={() => {
            calculate();
          }}
        />

        <Button
          title="Clear"
          className={classes.TableClearBtn}
          onClick={() => {
            clear();
          }}
        />
      </div>
      {retention ? (
        <p className={classes.TableNote}>Rolling Retention 7 day = {retention}%</p>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  tableData: state.changedate.data,
  newInfo: state.changedate.newData,
});

const mapDispatchToProps = (dispatch) => ({
    clearNew: () => {
      dispatch(clearNewData());
    },
    renderData: (data) => {
      dispatch(addToTable(data));
    },
    clearData: () => {
      dispatch(clearTable());
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Table);

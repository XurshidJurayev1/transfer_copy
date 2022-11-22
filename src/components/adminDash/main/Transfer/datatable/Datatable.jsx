import './datatable.scss';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { userColumns, userRows } from './datatablesource';
import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { deleteToast, fetchExcelData, listTransactions, listTransfer } from '../../../../../action';
import EditIcon from '@mui/icons-material/Edit';
import { Box, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { toast, ToastContainer } from 'react-toastify';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { formatSum } from '../../../../../helpers/formatSum2';


const Datatable = (props) => {
  const [data, setData] = useState([]);
  const [card, setCard] = useState('');
  const [accaunt, setAccount] = useState('');
  const [cardId, setCardId] = useState('');
  const [pay, setPay] = useState('');
  const [status, setStatus] = useState('');
  const [filtred, setFiltred] = useState('');
  const [filtrFunc, setFiltrFunc] = useState(false);
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);
  const [summaStatus, setSummaStatus] = useState(false);
  const [summa, setSumma] = useState(0);
  const token = props.token;
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  let list = props.list;

  useEffect(() => {
    if (props.list.data) {
      setData(props.list.data.transactions);
    } else {
      setData([]);
    }
  }, [props.list]);

  useEffect(() => {
    if (props.error.errStatus === 404) {
      toast.error(props.error.errText, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      props.deleteToast();

    }
  }, [props.error]);


  // const dateFilter = () => {
  //   const data = [{ id: 1, receive_date: '07.03.2022 05:13:03', remarks: '11' }, {
  //     id: 2, receive_date: '07.05.2022 05:13:03', remarks: '14',
  //   }, { id: 3, receive_date: '07.05.2022 05:13:03', remarks: '11' }, {
  //     id: 3, receive_date: '07.03.2022 05:13:03', remarks: '11',
  //   }, { id: 3, receive_date: '07.05.2022 05:13:03', remarks: '11' }, {
  //     id: 3, receive_date: '07.03.2022 05:13:03', remarks: '11',
  //   }, { id: 3, receive_date: '07.05.2022 05:13:03', remarks: '11' }, {
  //     id: 3, receive_date: '07.03.2022 05:13:03', remarks: '11',
  //   }, { id: 3, receive_date: '07.05.2022 05:13:03', remarks: '11' }, {
  //     id: 3, receive_date: '07.03.2022 05:13:03', remarks: '11',
  //   }, { id: 4, receive_date: '07.05.2022 05:13:03', remarks: '15' }];
  //
  //   const input1 = 'May 1, 2021';
  //   const input2 = 'March 25, 2021';
  //   const inputTS = new Date(input1).getTime();
  //   const inputTS2 = new Date(input2).getTime();
  //
  //   console.log(inputTS);
  //
  //   console.log(Date.parse(data[0].receive_date) > inputTS ? 'true' : 'false');
  //
  //   const result1 = data.filter(d => inputTS <= Date.parse(d.receive_date));
  //   const result2 = result1.filter(d => Date.parse(d.receive_date) <= inputTS2);
  //
  //   console.log('result1', result1);
  //   console.log(result2);
  //   return result2;
  // };
  //
  // console.log(dateFilter());


  useEffect(() => {
    filtr();
  }, [page, pageSize, date1, date2, card, card, status, pay]);


  const filtr = () => {
    // const getDate1 = new Date(date1);
    // const getDate2 = new Date(date2);
    //
    // if (isNaN(getDate1) && isNaN(getDate2)) {
    //   const result = list.filter(item => cardId === '' ? item : item.id.toString().includes(cardId.toString()))
    //     .filter(i => card === '' ? i : i.card.toString().includes(card.toString()))
    //     .filter(i => status === '' ? i : i.status === status)
    //     .filter(i => pay === '' ? i : i.turi === pay);
    //   // .filter(i => new Date(i.create_time) < getDate2)
    //   // .filter(i => new Date(i.create_time) > getDate1);
    //
    //   setFiltred(result);
    //   setFiltrFunc(true);
    // }
    //
    // if (!isNaN(getDate2) && isNaN(getDate1)) {
    //
    //   const result = list.filter(item => cardId === '' ? item : item.id.toString().includes(cardId.toString()))
    //     .filter(i => card === '' ? i : i.card.toString().includes(card.toString()))
    //     .filter(i => status === '' ? i : i.status === status)
    //     .filter(i => pay === '' ? i : i.turi === pay)
    //     .filter(i => new Date(i.create_time) < getDate2);
    //
    //
    //   setFiltred(result);
    //   setFiltrFunc(true);
    // }
    // if (isNaN(getDate2) && !isNaN(getDate1)) {
    //
    //   const result = list.filter(item => cardId === '' ? item : item.id.toString().includes(cardId.toString()))
    //     .filter(i => card === '' ? i : i.card.toString().includes(card.toString()))
    //     .filter(i => status === '' ? i : i.status === status)
    //     .filter(i => pay === '' ? i : i.turi === pay)
    //     .filter(i => new Date(i.create_time) > getDate1);
    //
    //
    //   setFiltred(result);
    //   setFiltrFunc(true);
    // }
    // if (!isNaN(getDate1) && !isNaN(getDate2)) {
    //   const result = list.filter(item => cardId === '' ? item : item.id.toString().includes(cardId.toString()))
    //     .filter(i => card === '' ? i : i.card.toString().includes(card.toString()))
    //     .filter(i => status === '' ? i : i.status === status)
    //     .filter(i => pay === '' ? i : i.turi === pay)
    //     .filter(i => new Date(i.create_time) < getDate2)
    //     .filter(i => new Date(i.create_time) > getDate1);
    //
    //   setFiltred(result);
    //   setFiltrFunc(true);
    // }


    const formData = new FormData();
    const dateTime1 = new Date(date1).getTime();
    const timeZone1 = new Date(date1).getTimezoneOffset();
    const timestamp1 = Math.floor(dateTime1 / 1000);
    const dateTime2 = new Date(date2).getTime();
    const timeZone2 = new Date(date2).getTimezoneOffset();
    const timestamp2 = Math.floor(dateTime2 / 1000);
    const pageReq = page === 0 ? 1 : page + 1;

    const getZone1 = timestamp1 + timeZone1;
    const getZone2 = timestamp2 + timeZone2;


    // console.log(timestamp1 + timeZone1);
    // console.log(timestamp1);
    // console.log(timeZone1);
    // console.log(dateTime1);


    cardId && formData.append('tid', cardId);
    card && formData.append('pan', card);
    // timestamp1 && formData.append('dateFrom', timestamp1);
    timestamp1 && formData.append('dateFrom', timestamp1 === 0 ? timestamp1 : getZone1);
    // timestamp2 && formData.append('dateTo', timestamp2);
    timestamp2 && formData.append('dateTo', timestamp2 === 0 ? timestamp2 : getZone2);
    status && formData.append('status', status);
    pay && formData.append('type', pay);
    page && formData.append('page', page);
    formData.append('limit', pageSize);

    props.listTransactions(formData, token);


  };
  //
  // const dateTime = new Date(date1).getTime();
  // const timestamp = Math.floor(dateTime / 1000);
  //
  // console.log(dateTime);
  // console.log(timestamp);


  const reset = () => {
    setFiltred('');
    setSumma('');
    setAccount('');
    setCardId('');
    setCard('');
    setDate1(null);
    setDate2(null);
    setSummaStatus('');
    setFiltrFunc(false);
  };


  const render = () => {
    // props.listTransfer();
    setFiltred(props.list);
  };


  useEffect(() => {
    render();
    setFiltred(props.list);

  }, []);


  const actionColumn = [{
    field: 'code_error', headerName: 'Код ошибки', width: 130, renderCell: (params) => {
      return (<div className="cellAction" style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgb(112 112 112)',
      }}>

        <EditIcon className="icon" />


      </div>);
    },
  }];

  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

  const fileExtension = '.xlsx';


  const fileData = list.data && list.data.transactions;


  const fileName = 'MySheets';


  const allSumma = () => {
    setSummaStatus(true);
    if (filtrFunc) {
      const totalCount = filtred.reduce((total, item) => {
        return total + Number(item.amount);
      }, 0);
      setSumma(totalCount);

    } else {
      const totalCount = list.reduce((total, item) => {
        return total + Number(item.amount);
      }, 0);
      setSumma(totalCount);
    }
  };


  Number.prototype.toDivide = function () {
    var int = String(this);
    if (int.length <= 3) return int;
    var space = 0;
    var number = '';

    for (var i = int.length - 1; i >= 0; i--) {
      if (space == 3) {
        number = ' ' + number;
        space = 0;
      }
      number = int.charAt(i) + number;
      space++;
    }

    return number;
  };


  // function filterTimes(arr, min, max) {
  //   min = new Date('01-01-2017 ' + min).valueOf();
  //   max = new Date('01-01-2017 ' + max).valueOf();
  //   console.log(min);
  //   return arr.filter(function (a) {
  //     var d = new Date('01-01-2017 ' + a.create_time).valueOf();
  //     if (d > min && d < max) return a;
  //   });
  // }
  //
  // console.log(filterTimes(list, date1, date2));

  const exportExcel = (count) => {
    const formData = new FormData();
    const dateTime1 = new Date(date1).getTime();
    const timestamp1 = Math.floor(dateTime1 / 1000);
    const dateTime2 = new Date(date2).getTime();
    const timestamp2 = Math.floor(dateTime2 / 1000);
    console.log(page);
    cardId && formData.append('tid', cardId);
    card && formData.append('pan', card);
    timestamp1 && formData.append('dateFrom', timestamp1);
    timestamp2 && formData.append('dateTo', timestamp2);
    status && formData.append('status', status);
    pay && formData.append('type', pay);
    page && formData.append('page', page);
    formData.append('limit', count);

    props.fetchExcelData(formData, token);
  };


  return (<div className="datatable">
    <div className="datatableTitle">
      <Box
        className="filter-inputs">
        <Typography component="h1" mb={3} variant="h5"> Выберите метод фильтрации </Typography>
        <Box className="form_input_flex">
          <Box className="form_input_fields">
            <TextField
              type="number"
              fullWidth
              value={cardId}
              onChange={(e) => setCardId(e.target.value)}
              id="outlined-basic"
              label="Id транзакции"
              variant="outlined" />
          </Box>
          <Box className="form_input_fields">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  inputFormat="dd/MM/yyyy"
                  renderInput={(props) => <TextField {...props} />}
                  label="Выборка дат с"
                  value={date1}
                  onChange={(newValue) => {
                    setDate1(newValue);
                  }}
                />
              </Stack>
            </LocalizationProvider>
          </Box>
          <Box className="form_input_fields">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  inputFormat="dd/MM/yyyy"
                  renderInput={(props) => <TextField {...props} />}
                  label="Выборка дат до"
                  value={date2}
                  onChange={(newValue) => {
                    setDate2(newValue);
                  }}
                />
              </Stack>
            </LocalizationProvider>
          </Box>

          <Box className="form_input_fields">
            <TextField
              type="number"
              fullWidth
              value={card}
              onChange={(e) => setCard(e.target.value)}
              id="outlined-basic"
              label="По карте"
              variant="outlined" />
          </Box>

          {/*<Box className="form_input_fields">*/}
          {/*  <FormControl fullWidth>*/}
          {/*    <InputLabel*/}
          {/*      id="demo-simple-select-label"*/}
          {/*    >*/}
          {/*      Выберите аккаунт*/}
          {/*    </InputLabel>*/}
          {/*    <Select*/}
          {/*      disabled={true}*/}
          {/*      labelId="demo-simple-select-label"*/}
          {/*      id="demo-simple-select"*/}
          {/*      value={accaunt}*/}
          {/*      label="Выберите аккаунт"*/}
          {/*      onChange={(e) => setAccount(e.target.value)}*/}
          {/*    >*/}
          {/*      <MenuItem value={10}>Ten</MenuItem>*/}
          {/*      <MenuItem value={20}>Twenty</MenuItem>*/}
          {/*      <MenuItem value={30}>Thirty</MenuItem>*/}
          {/*    </Select>*/}
          {/*  </FormControl>*/}
          {/*</Box>*/}
          <Box className="form_input_fields">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Тип оплаты</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pay}
                defaultValue={''}
                label="Тип оплаты"
                onChange={(e) => setPay(e.target.value)}
              >
                <MenuItem value={''} defaultValue={true}>Все</MenuItem>
                <MenuItem value={'1'}>Ввод</MenuItem>
                <MenuItem value={'-1'}>Вывод</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className="form_input_fields">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Статус транзакции</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Статус транзакции"
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value={''}>Все</MenuItem>
                <MenuItem value={'0'}>В Обработке</MenuItem>
                <MenuItem value={'1'}>Успешно</MenuItem>
                <MenuItem value={'-1'}>Не Успешно</MenuItem>
              </Select>
            </FormControl>
          </Box>

        </Box>
        <Box sx={{
          width: '100%', display: 'flex', flexWrap: 'wrap',

        }}>
          {/*<button style={{ marginRight: '20px' }} type="button" className="btn btn-primary primary_btn"*/}
          {/*        onClick={() => filtr()}> Filtr*/}
          {/*</button>*/}
          <button type="button" style={{ marginRight: '20px' }} className="btn btn-primary primary_btn"
                  onClick={() => reset()}> reset
          </button>
          <button type="button" className="btn btn-success primary_btn" style={{ marginRight: '20px' }}
                  onClick={() => exportExcel(list.data.count)}>
            Export
          </button>
          {/*<button type="button" className="btn btn-info primary_btn" style={{ marginRight: '20px' }} onClick={allSumma}>*/}
          {/*  Сумма*/}
          {/*</button>*/}
          <p> Общая сумма: {list.data ? formatSum(list.data.amount_sum) + ' сум' : 0} </p>
        </Box>

      </Box>
    </div>
    <DataGrid
      page={page - 1}
      onPageChange={(newPage) => {
        console.log(newPage);
        setPage(newPage + 1);
      }}
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      className="datagrid"
      getRowId={(row) => row.id}
      rows={data}
      // loading={props.list.length === 0}
      columns={userColumns.concat(actionColumn)}
      rowsPerPageOptions={[10, 20, 50, 100]}
      rowCount={list.data && list.data.count}
      pagination
      checkboxSelection
      disableSelectionOnClick
      components={{ Toolbar: GridToolbar }}
      getGridDateOperators={true}
      paginationMode="server"
    />
  </div>);
};

const mapStateToProps = (state) => {
  return {
    list: state.listTransfer, token: state.token, error: state.error,
  };
};

export default connect(mapStateToProps, { listTransfer, listTransactions, deleteToast, fetchExcelData })(Datatable);

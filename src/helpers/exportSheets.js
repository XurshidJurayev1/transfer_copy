import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

const fileExtension = '.xlsx';
const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

export const exportToCSV = (csvData, fileName) => {

  const ws = XLSX.utils.json_to_sheet(csvData);

  const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };

  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

  const data = new Blob([excelBuffer], { type: fileType });

  FileSaver.saveAs(data, fileName + fileExtension);

};
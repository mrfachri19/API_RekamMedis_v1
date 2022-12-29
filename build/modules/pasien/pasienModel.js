const connection = require("../../config/mysql");
module.exports = {
  getAllPasien: (limit, offset, search, sort) => new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM data_pasien WHERE nama_pasien LIKE '%${search}%' ORDER BY ${sort} LIMIT ? OFFSET ?`, [limit, offset], (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(`SQL : ${err.sqlMessage}`));
      }
    });
  }),
  historyAllpasien: (limit, offset, search, sort) => new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM data_pasien WHERE CreatedAt LIKE '%${search}%' ORDER BY ${sort} LIMIT ? OFFSET ?`, [limit, offset], (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(`SQL : ${err.sqlMessage}`));
      }
    });
  }),
  getCountPasien: search => new Promise((resolve, reject) => {
    connection.query(`SELECT COUNT(*) AS total FROM data_pasien WHERE nama_pasien LIKE '%${search}%'`, (err, result) => {
      if (!err) {
        resolve(result[0].total);
      } else {
        reject(new Error(`SQL : ${err.sqlMessage}`));
      }
    });
  }),
  postPasien: data => new Promise((resolve, reject) => {
    const query = connection.query("INSERT INTO data_pasien SET ?", data, (error, result) => {
      if (!error) {
        const newResult = {
          id: result.insertId,
          ...data
        };
        resolve(newResult);
      } else {
        reject(new Error(`SQL : ${error.sqlMessage}`));
      }
    });
    // eslint-disable-next-line no-console
    console.log(query.sql);
  }),
  historyAllpasien: (limit, offset, search, sort) => new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM data_pasien WHERE CreatedAt LIKE '%${search}%' ORDER BY ${sort} LIMIT ? OFFSET ?`, [limit, offset], (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(`SQL : ${err.sqlMessage}`));
      }
    });
  })
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb25uZWN0aW9uIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRBbGxQYXNpZW4iLCJsaW1pdCIsIm9mZnNldCIsInNlYXJjaCIsInNvcnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInF1ZXJ5IiwiZXJyIiwicmVzdWx0IiwiRXJyb3IiLCJzcWxNZXNzYWdlIiwiaGlzdG9yeUFsbHBhc2llbiIsImdldENvdW50UGFzaWVuIiwidG90YWwiLCJwb3N0UGFzaWVuIiwiZGF0YSIsImVycm9yIiwibmV3UmVzdWx0IiwiaWQiLCJpbnNlcnRJZCIsImNvbnNvbGUiLCJsb2ciLCJzcWwiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9wYXNpZW4vcGFzaWVuTW9kZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29ubmVjdGlvbiA9IHJlcXVpcmUoXCIuLi8uLi9jb25maWcvbXlzcWxcIik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBnZXRBbGxQYXNpZW46IChsaW1pdCwgb2Zmc2V0LCBzZWFyY2gsIHNvcnQpID0+XHJcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbm5lY3Rpb24ucXVlcnkoXHJcbiAgICAgICAgYFNFTEVDVCAqIEZST00gZGF0YV9wYXNpZW4gV0hFUkUgbmFtYV9wYXNpZW4gTElLRSAnJSR7c2VhcmNofSUnIE9SREVSIEJZICR7c29ydH0gTElNSVQgPyBPRkZTRVQgP2AsXHJcbiAgICAgICAgW2xpbWl0LCBvZmZzZXRdLFxyXG4gICAgICAgIChlcnIsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgU1FMIDogJHtlcnIuc3FsTWVzc2FnZX1gKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSksXHJcblxyXG4gICAgaGlzdG9yeUFsbHBhc2llbjogKGxpbWl0LCBvZmZzZXQsIHNlYXJjaCwgc29ydCkgPT5cclxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29ubmVjdGlvbi5xdWVyeShcclxuICAgICAgICBgU0VMRUNUICogRlJPTSBkYXRhX3Bhc2llbiBXSEVSRSBDcmVhdGVkQXQgTElLRSAnJSR7c2VhcmNofSUnIE9SREVSIEJZICR7c29ydH0gTElNSVQgPyBPRkZTRVQgP2AsXHJcbiAgICAgICAgW2xpbWl0LCBvZmZzZXRdLFxyXG4gICAgICAgIChlcnIsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgU1FMIDogJHtlcnIuc3FsTWVzc2FnZX1gKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSksXHJcblxyXG4gIGdldENvdW50UGFzaWVuOiAoc2VhcmNoKSA9PlxyXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25uZWN0aW9uLnF1ZXJ5KFxyXG4gICAgICAgIGBTRUxFQ1QgQ09VTlQoKikgQVMgdG90YWwgRlJPTSBkYXRhX3Bhc2llbiBXSEVSRSBuYW1hX3Bhc2llbiBMSUtFICclJHtzZWFyY2h9JSdgLFxyXG4gICAgICAgIChlcnIsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHRbMF0udG90YWwpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgU1FMIDogJHtlcnIuc3FsTWVzc2FnZX1gKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSksXHJcblxyXG4gICAgcG9zdFBhc2llbjogKGRhdGEpID0+XHJcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gY29ubmVjdGlvbi5xdWVyeShcclxuICAgICAgICBcIklOU0VSVCBJTlRPIGRhdGFfcGFzaWVuIFNFVCA/XCIsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICAoZXJyb3IsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdSZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgaWQ6IHJlc3VsdC5pbnNlcnRJZCxcclxuICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXNvbHZlKG5ld1Jlc3VsdCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBTUUwgOiAke2Vycm9yLnNxbE1lc3NhZ2V9YCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgY29uc29sZS5sb2cocXVlcnkuc3FsKTtcclxuICAgIH0pLFxyXG5cclxuICAgIGhpc3RvcnlBbGxwYXNpZW46IChsaW1pdCwgb2Zmc2V0LCBzZWFyY2gsIHNvcnQpID0+XHJcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbm5lY3Rpb24ucXVlcnkoXHJcbiAgICAgICAgYFNFTEVDVCAqIEZST00gZGF0YV9wYXNpZW4gV0hFUkUgQ3JlYXRlZEF0IExJS0UgJyUke3NlYXJjaH0lJyBPUkRFUiBCWSAke3NvcnR9IExJTUlUID8gT0ZGU0VUID9gLFxyXG4gICAgICAgIFtsaW1pdCwgb2Zmc2V0XSxcclxuICAgICAgICAoZXJyLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFNRTCA6ICR7ZXJyLnNxbE1lc3NhZ2V9YCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0pLFxyXG5cclxufTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQztBQUVoREMsTUFBTSxDQUFDQyxPQUFPLEdBQUc7RUFDZkMsWUFBWSxFQUFFLENBQUNDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLElBQUksS0FDeEMsSUFBSUMsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBRUMsTUFBTSxLQUFLO0lBQy9CWCxVQUFVLENBQUNZLEtBQUssQ0FDYixzREFBcURMLE1BQU8sZUFBY0MsSUFBSyxtQkFBa0IsRUFDbEcsQ0FBQ0gsS0FBSyxFQUFFQyxNQUFNLENBQUMsRUFDZixDQUFDTyxHQUFHLEVBQUVDLE1BQU0sS0FBSztNQUNmLElBQUksQ0FBQ0QsR0FBRyxFQUFFO1FBQ1JILE9BQU8sQ0FBQ0ksTUFBTSxDQUFDO01BQ2pCLENBQUMsTUFBTTtRQUNMSCxNQUFNLENBQUMsSUFBSUksS0FBSyxDQUFFLFNBQVFGLEdBQUcsQ0FBQ0csVUFBVyxFQUFDLENBQUMsQ0FBQztNQUM5QztJQUNGLENBQUMsQ0FDRjtFQUNILENBQUMsQ0FBQztFQUVGQyxnQkFBZ0IsRUFBRSxDQUFDWixLQUFLLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEtBQzlDLElBQUlDLE9BQU8sQ0FBQyxDQUFDQyxPQUFPLEVBQUVDLE1BQU0sS0FBSztJQUMvQlgsVUFBVSxDQUFDWSxLQUFLLENB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
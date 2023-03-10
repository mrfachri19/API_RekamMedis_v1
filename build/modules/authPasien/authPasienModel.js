const connection = require("../../config/mysql");
module.exports = {
  registerPasien: data => new Promise((resolve, reject) => {
    connection.query("INSERT INTO pasien_management SET ?", data, (error, result) => {
      if (!error) {
        const newResult = {
          id: result.insertId,
          ...data
        };
        delete newResult.password;
        resolve(newResult);
      } else {
        reject(new Error(`SQL : ${error.sqlMessage}`));
      }
    });
  }),
  getUserByEmail: email => new Promise((resolve, reject) => {
    connection.query("SELECT * FROM pasien_management WHERE email = ?", email, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(new Error(`SQL: ${error.sqlMessage}`));
      }
    });
  })
  // getUserByUsername: (email) =>
  // new Promise((resolve, reject) => {
  //   connection.query(
  //     "SELECT * FROM pasien_management WHERE username = ?",
  //     email,
  //     (error, result) => {
  //       if (!error) {
  //         resolve(result);
  //       } else {
  //         reject(new Error(`SQL: ${error.sqlMessage}`));
  //       }
  //     }
  //   );
  // }),
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb25uZWN0aW9uIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWdpc3RlclBhc2llbiIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInF1ZXJ5IiwiZXJyb3IiLCJyZXN1bHQiLCJuZXdSZXN1bHQiLCJpZCIsImluc2VydElkIiwicGFzc3dvcmQiLCJFcnJvciIsInNxbE1lc3NhZ2UiLCJnZXRVc2VyQnlFbWFpbCIsImVtYWlsIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvYXV0aFBhc2llbi9hdXRoUGFzaWVuTW9kZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29ubmVjdGlvbiA9IHJlcXVpcmUoXCIuLi8uLi9jb25maWcvbXlzcWxcIik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICByZWdpc3RlclBhc2llbjogKGRhdGEpID0+XHJcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbm5lY3Rpb24ucXVlcnkoXCJJTlNFUlQgSU5UTyBwYXNpZW5fbWFuYWdlbWVudCBTRVQgP1wiLCBkYXRhLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmICghZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnN0IG5ld1Jlc3VsdCA9IHtcclxuICAgICAgICAgICAgaWQ6IHJlc3VsdC5pbnNlcnRJZCxcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBkZWxldGUgbmV3UmVzdWx0LnBhc3N3b3JkO1xyXG4gICAgICAgICAgcmVzb2x2ZShuZXdSZXN1bHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBTUUwgOiAke2Vycm9yLnNxbE1lc3NhZ2V9YCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KSxcclxuICBnZXRVc2VyQnlFbWFpbDogKGVtYWlsKSA9PlxyXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25uZWN0aW9uLnF1ZXJ5KFxyXG4gICAgICAgIFwiU0VMRUNUICogRlJPTSBwYXNpZW5fbWFuYWdlbWVudCBXSEVSRSBlbWFpbCA9ID9cIixcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICAoZXJyb3IsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFlcnJvcikge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBTUUw6ICR7ZXJyb3Iuc3FsTWVzc2FnZX1gKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSksXHJcbiAgICAvLyBnZXRVc2VyQnlVc2VybmFtZTogKGVtYWlsKSA9PlxyXG4gICAgLy8gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgLy8gICBjb25uZWN0aW9uLnF1ZXJ5KFxyXG4gICAgLy8gICAgIFwiU0VMRUNUICogRlJPTSBwYXNpZW5fbWFuYWdlbWVudCBXSEVSRSB1c2VybmFtZSA9ID9cIixcclxuICAgIC8vICAgICBlbWFpbCxcclxuICAgIC8vICAgICAoZXJyb3IsIHJlc3VsdCkgPT4ge1xyXG4gICAgLy8gICAgICAgaWYgKCFlcnJvcikge1xyXG4gICAgLy8gICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAvLyAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICByZWplY3QobmV3IEVycm9yKGBTUUw6ICR7ZXJyb3Iuc3FsTWVzc2FnZX1gKSk7XHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfSksXHJcblxyXG5cclxufTsiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFVBQVUsR0FBR0MsT0FBTyxDQUFDLG9CQUFvQixDQUFDO0FBRWhEQyxNQUFNLENBQUNDLE9BQU8sR0FBRztFQUNmQyxjQUFjLEVBQUdDLElBQUksSUFDbkIsSUFBSUMsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBRUMsTUFBTSxLQUFLO0lBQy9CUixVQUFVLENBQUNTLEtBQUssQ0FBQyxxQ0FBcUMsRUFBRUosSUFBSSxFQUFFLENBQUNLLEtBQUssRUFBRUMsTUFBTSxLQUFLO01BQy9FLElBQUksQ0FBQ0QsS0FBSyxFQUFFO1FBQ1YsTUFBTUUsU0FBUyxHQUFHO1VBQ2hCQyxFQUFFLEVBQUVGLE1BQU0sQ0FBQ0csUUFBUTtVQUNuQixHQUFHVDtRQUNMLENBQUM7UUFDRCxPQUFPTyxTQUFTLENBQUNHLFFBQVE7UUFDekJSLE9BQU8sQ0FBQ0ssU0FBUyxDQUFDO01BQ3BCLENBQUMsTUFBTTtRQUNMSixNQUFNLENBQUMsSUFBSVEsS0FBSyxDQUFFLFNBQVFOLEtBQUssQ0FBQ08sVUFBVyxFQUFDLENBQUMsQ0FBQztNQUNoRDtJQUNGLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztFQUNKQyxjQUFjLEVBQUdDLEtBQUssSUFDcEIsSUFBSWIsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBRUMsTUFBTSxLQUFLO0lBQy9CUixVQUFVLENBQUNTLEtBQUssQ0FDZCxpREFBaUQsRUFDakRVLEtBQUssRUFDTCxDQUFDVCxLQUFLLEVBQUVDLE1BQU0sS0FBSztNQUNqQixJQUFJLENBQUNELEtBQUssRUFBRTtRQUNWSCxPQUFPLENBQUNJLE1BQU0sQ0FBQztNQUNqQixDQUFDLE1BQU07UUFDTEgsTUFBTSxDQUFDLElBQUlRLEtBQUssQ0FBRSxRQUFPTixLQUFLLENBQUNPLFVBQVcsRUFBQyxDQUFDLENBQUM7TUFDL0M7SUFDRixDQUFDLENBQ0Y7RUFDSCxDQUFDO0VBQ0Q7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUdKLENBQUMifQ==
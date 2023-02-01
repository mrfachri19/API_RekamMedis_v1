/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const pasienModel = require("./pasienModel");
const helperWrapper = require("../../helper/wrapper");

module.exports = {
  getAllPasien: async (req, res) => {
    try {
      let { page, limit, search, sort } = req.query;
      page = Number(page) || 1;
      limit = Number(limit) || 10;
      search = search || "";
      sort = sort || "nama_pasien ASC";

      let offset = page * limit - limit;
      const totalData = await pasienModel.getCountPasien(search);
      const totalPage = Math.ceil(totalData / limit);

      if (totalPage < page) {
        offset = 0;
        page = 1;
      }

      const pageInfo = {
        page,
        totalPage,
        limit,
        totalData,
      };

      const result = await pasienModel.getAllPasien(
        limit,
        offset,
        search,
        sort
      );

      if (result.length < 1) {
        return helperWrapper.response(res, 200, `Data not found !`, []);
      }

      return helperWrapper.response(
        res,
        200,
        "Success get data",
        result,
        pageInfo
      );
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `Bad request (${error.message})`,
        null
      );
    }
  },

  postPasien: async (req, res) => {
    try {
      function generateString(length) {
        const result = Math.random()
          .toString(36)
          .substring(2, length + 2);
        return result;
      }
      const {
        kode_rm,
        nama_pasien,
        jenis_kelamin,
        umur,
        alamat,
        td,
        diagnosa,
        bagian,
      } = req.body;
      const setData = {
        id: "Pas" + "-" + generateString(8),
        kode_rm,
        nama_pasien,
        jenis_kelamin,
        umur,
        alamat,
        td,
        diagnosa,
        bagian,
        CreatedAt: new Date(Date.now()),
      };
      const result = await pasienModel.postPasien(setData);
      return helperWrapper.response(res, 200, "Succes create data", result);
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `bad request (${error.message})`,
        null
      );
    }
  },

  historyAllpasien: async (req, res) => {
    try {
      let { page, limit, search, sort } = req.query;
      page = Number(page) || 1;
      limit = Number(limit) || 10;
      search = search || "";
      sort = sort || "nama_pasien ASC";

      let offset = page * limit - limit;
      const totalData = await pasienModel.getCountPasien(search);
      const totalPage = Math.ceil(totalData / limit);

      if (totalPage < page) {
        offset = 0;
        page = 1;
      }

      const pageInfo = {
        page,
        totalPage,
        limit,
        totalData,
      };

      const result = await pasienModel.historyAllpasien(
        limit,
        offset,
        search,
        sort
      );

      if (result.length < 1) {
        return helperWrapper.response(res, 200, `Data not found !`, []);
      }

      return helperWrapper.response(
        res,
        200,
        "Success get data",
        result,
        pageInfo
      );
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `Bad request (${error.message})`,
        null
      );
    }
  },

  // getPasienById: async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const result = await movieModel.getPasienById(id);
  //     if (result.length < 1) {
  //       return helperWrapper.response(
  //         res,
  //         404,
  //         `data by id ${id} not found !`,
  //         null
  //       );
  //     }
  //     // PROSES UNTUK MENYIMPAN DATA KE DALAM REDIS
  //     // =====
  //     redis.setex(`getPasien:${id}`, 3600, JSON.stringify(result));
  //     // ======
  //     return helperWrapper.response(res, 200, "succes get data by id", result);
  //   } catch (error) {
  //     return helperWrapper.response(
  //       res,
  //       400,
  //       `bad request (${error.message})`,
  //       null
  //     );
  //   }
  // },
};

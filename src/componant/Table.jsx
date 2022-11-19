import * as React from "react";
import { styled } from "@mui/system";
import TablePaginationUnstyled, {
  tablePaginationUnstyledClasses as classes,
} from "@mui/base/TablePaginationUnstyled";

import { GiRead } from "react-icons/gi";
import axios from "axios";
import { Box, Modal, Typography } from "@mui/material";
import "./tableStyle.css";
import Search from "./Search";
import { BsFillCloudDownloadFill } from "react-icons/bs";

const blue = {
  200: "#A5D8FF",
  400: "#3399FF",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const Root = styled("div")(
  ({ theme }) => `
  table {
    
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    width: 100%;
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    box-shadow: 0px 4px 30px ${
      theme.palette.mode === "dark" ? grey[900] : grey[200]
    };
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    
  }

  td,
  th {
    padding: 16px;

  }

  th {
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  }
  `
);

const CustomTablePagination = styled(TablePaginationUnstyled)(
  ({ theme }) => `
  & .${classes.spacer} {
    display: none;
  }

  & .${classes.toolbar}  {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.select}{
    padding: 2px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 50px;
    background-color: transparent;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    }

    &:focus {
      outline: 1px solid ${
        theme.palette.mode === "dark" ? blue[400] : blue[200]
      };
    }
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.actions} {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 50px;
    text-align: center;
  }

  & .${classes.actions} > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    }

    &:focus {
      outline: 1px solid ${
        theme.palette.mode === "dark" ? blue[400] : blue[200]
      };
    }
  }
  `
);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "900px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function QuranTable({ data }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [surahNumber, setSurahNumber] = React.useState(1);
  const [surah, setSurah] = React.useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [filter, setFilter] = React.useState();

  React.useEffect(() => {
    axios
      .get(`http://api.alquran.cloud/v1/surah/${surahNumber}`)
      .then((response) => {
        setSurah(response.data);
        if (surah) {
          handleOpen();
        }
      })
      .catch((res) => {
        console.log(res);
      });
  }, [surahNumber]);
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  function handelSurah(number) {
    setSurahNumber(number);
    numberOfAyahs = 0;
  }

  // for search in table (Search.jsx)
  function searchHandle(value) {
    let result = data.filter((e) => e.name.includes(value));
    setFilter(result);
  }

  let numberOfAyahs = 0;
  if (filter != null) {
    return (
      <Root sx={{ maxWidth: "100%" }} clasName="w-100">
        <Search searchHandle={searchHandle} />
        <table
          className="table-primary w-100 "
          aria-label="custom pagination table"
        >
          <thead className="table-t">
            <tr className="table-t">
              <th>رقم السورة</th>
              <th>اسم السورة </th>
              <th>عدد الايات</th>
              <th>
                قراءة
                <GiRead />
              </th>
              <th>
                تحميل ..
                <BsFillCloudDownloadFill />
              </th>
            </tr>
          </thead>
          <tbody>
            {(rowsPerPage > 0
              ? filter.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : filter
            ).map((row) => (
              <tr key={row.name}>
                <td className="h5" align="right">
                  {row.number}
                </td>
                <td className="h5">{row.name}</td>
                <td className="h5" align="right">
                  {row.numberOfAyahs}
                </td>
                <td
                  className="hover h5"
                  align="right"
                  onClick={(e) => handelSurah(row.number)}
                  style={{ cursor: "pointer" }}
                >
                  {row.name} <GiRead />
                </td>
                <td className="h5" align="right">
                  <a
                    href={`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${row.number}.mp3`}
                  >
                    <BsFillCloudDownloadFill />
                  </a>
                </td>
              </tr>
            ))}
            {emptyRows > 0 && (
              <tr style={{ height: 41 * emptyRows }}>
                <td colSpan={3} />
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <CustomTablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={4}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    "aria-label": "rows per page",
                  },
                  actions: {
                    showFirstButton: true,
                    showLastButton: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />

              {/* <Pagination count={10} variant="outlined" color="primary" /> */}
            </tr>
          </tfoot>
        </table>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                className="mb-2"
                id="modal-modal-title"
                variant="h4"
                component="h2"
                align="center"
              >
                {surah == undefined ? "d" : surah.data.name}
              </Typography>
              <p
                id="modal-modal-description"
                sx={{ mt: 2 }}
                style={{
                  overflow: "scroll",
                  fontFamily: "Light",
                  height: "60vh",
                  width: "800px",
                }}
              >
                {surah == undefined
                  ? "d"
                  : surah.data.ayahs.map((t) => {
                      numberOfAyahs++;
                      return t.text + `【${numberOfAyahs}】`;
                    })}
              </p>
            </Box>
          </Modal>
        </div>
      </Root>
    );
  }
  return (
    <Root sx={{ maxWidth: "100%" }} clasName="w-100">
      <Search searchHandle={searchHandle} />
      <table
        className="table-primary w-100 "
        aria-label="custom pagination table"
      >
        <thead className="table-t">
          <tr className="table-t">
            <th>رقم السورة</th>
            <th>اسم السورة </th>
            <th>عدد الايات</th>
            <th>
              قراءة
              <GiRead />
            </th>
            <th>
              تحميل ..
              <BsFillCloudDownloadFill />
            </th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((row) => (
            <tr key={row.name}>
              <td className="h5" align="right">
                {row.number}
              </td>
              <td className="h5">{row.name}</td>
              <td className="h5" align="right">
                {row.numberOfAyahs}
              </td>
              <td
                className="hover h5"
                align="right"
                onClick={(e) => handelSurah(row.number)}
                style={{ cursor: "pointer" }}
              >
                {row.name} <GiRead />
              </td>
              <td className="h5" align="right">
                <a
                  href={`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${row.number}.mp3`}
                >
                  <BsFillCloudDownloadFill />
                </a>
              </td>
            </tr>
          ))}
          {emptyRows > 0 && (
            <tr style={{ height: 41 * emptyRows }}>
              <td colSpan={3} />
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <CustomTablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={4}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  "aria-label": "rows per page",
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />

            {/* <Pagination count={10} variant="outlined" color="primary" /> */}
          </tr>
        </tfoot>
      </table>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              className="mb-2"
              id="modal-modal-title"
              variant="h4"
              component="h2"
              align="center"
            >
              {surah == undefined ? "d" : surah.data.name}
            </Typography>
            <p
              id="modal-modal-description"
              sx={{ mt: 2 }}
              style={{
                overflow: "scroll",
                fontFamily: "Light",
                height: "60vh",
                width: "800px",
              }}
            >
              {surah == undefined
                ? "d"
                : surah.data.ayahs.map((t) => {
                    numberOfAyahs++;
                    return t.text + `【${numberOfAyahs}】`;
                  })}
            </p>
          </Box>
        </Modal>
      </div>
    </Root>
  );
}

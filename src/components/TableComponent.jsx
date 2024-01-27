import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import img1 from "../assets/img/img1.png"
import img2 from "../assets/img/img2.png"
import img3 from "../assets/img/img3.png"
import img4 from "../assets/img/img4.png"
import img5 from "../assets/img/img5.png"
import view from "../assets/view.png"
import Image from "next/image";


const TableComponent = () => {
  function createData(name, date, amount, status,img) {
    return { name, date, amount, status,img  };
  }

  const rows = [
    createData("Marcus Bergson", "Nov 15, 2023", "$80,000", "Paid", img1),
    createData("Jaydon Vaccaro", "Nov 15, 2023", "$150,000", "Refund", img2),
    createData("Corey Schleifer", "Nov 14, 2023", "$87,000", "Paid", img3),
    createData("Cooper Press", "Nov 14, 2023", "$100,000", "Refund", img4),
    createData("Phillip Lubin", "Nov 14, 2023", "$78,000", "Paid", img5),
  ];

  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
      <Table sx={{ minWidth: 650, width:"100%" }} style={{width:"100%"}}>
        <TableHead sx={{width:"100%"}} style={{width:"100%"}}>
          <TableRow sx={{width:"100%"}} style={{width:"100%"}}>
            <TableCell
             sx={{
                color: "#9CA4AB",
                fontSize: "16px",
                   
                fontWeight: "500",
              }}
            >Name</TableCell>
            <TableCell
              align="left"
              sx={{
                color: "#9CA4AB",
                fontSize: "16px",
                   
                fontWeight: "500",
              }}
            >
              Date
            </TableCell>
            <TableCell align="left"
             sx={{
                color: "#9CA4AB",
                fontSize: "16px",
                   
                fontWeight: "500",
              }}
            >Amount&nbsp;</TableCell>
            <TableCell align="left"
             sx={{
                color: "#9CA4AB",
                fontSize: "16px",
                   
                fontWeight: "500",
              }}
            >Status&nbsp;</TableCell>
            <TableCell align="center"
             sx={{
                color: "#9CA4AB",
                fontSize: "16px",
                   
                fontWeight: "500",
              }}
            >Invoice&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{display:"flex",gap:"5px",alignItems:"center"}}>
                <Image
                src={row?.img}
                
                style={{
                    width:"30px",
                    height:"30px",
                    borderRadius:"50%",

                }}/>
                <div
                style={{
                    fontSize:"16px",
                    fontWeight:"500",
                    fontStyle:"normal",
                       
                    color:"#3A3F51"
                }}
                >
                    {row.name}
                </div>
              </TableCell>
              <TableCell align="left" sx={{
                fontSize:"16px",
                fontWeight:"400",
                fontStyle:"normal",
                   
                color:"#737373"
              }}>{row.date}</TableCell>
              <TableCell align="left"
              sx={{
                color: "#0D062D",
                fontSize: "16px",
                   
                fontWeight: "500",
              }}
              >{row.amount}</TableCell>
              <TableCell align="left"
              sx={{
                color: row.status === "Paid"? "#34CAA5": "#ED544E",
                fontSize: "16px",
                   
                fontWeight: "400",
              }}
              >{row.status}</TableCell>
              <TableCell align="center"
              sx={{
                color: "0D062D",
                fontSize: "14px",
                   
                fontWeight: "400",
                cursor:"pointer",
                display:"flex",
                alignItems:"center",
                gap:"5px"
              }}
              > <Image src={view}/>View</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;

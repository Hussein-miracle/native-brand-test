import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
function createData2(name, calories) {
    return { name, calories };
}

const rows = [
    createData("Project Name", "Project No", "Date", "Client", "Budget"),
    createData(
        "Villa F25 Project",
        "P-101",
        "12/01/2018",
        "Your client name1",
        "$55,000"
    ),
    createData(
        "GMA Residence Project",
        "P-102",
        "22/01/2019",
        "Your client name2",
        "$25,000"
    ),
    createData(
        "Banana Mansion Project",
        "P-103",
        "12/01/2018",
        "Your client name3",
        "$65,000"
    ),
];
const rows2 = [
    createData2("Proposal Name", "Project No"),
    createData("Villa F25 project proposal", "$25,000,000"),
    createData("GMA Residence project proposal", "$32,000,000"),
    createData("Banana Mansion project proposal", "$15,000,000"),
];

export default function Table1() {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                    m: 1,
                    width: "50vw",
                    height: 270,
                },
            }}
        >
            <TableContainer component={Paper} elevation={8}>
                <Table sx={{ minWidth: 150 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {/* <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">
                                Protein&nbsp;(g)
                            </TableCell> */}
                            {/* <Toolbar
                                sx={{
                                    pl: { sm: 2 },
                                    pr: { xs: 1, sm: 1 },
                                }}
                            >
                                <Typography
                                    sx={{ flex: "1 1 100%" }}
                                    variant="h6"
                                    id="tableTitle"
                                    component="div"
                                >
                                    My Recent Projects
                                </Typography>
                            </Toolbar> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">
                                    {row.calories}
                                </TableCell>
                                <TableCell align="left">{row.fat}</TableCell>
                                <TableCell align="left">{row.carbs}</TableCell>
                                <TableCell align="left">
                                    {row.protein}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export function Table2() {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                    m: 1,
                    width: "25vw",
                    height: 270,
                },
            }}
        >
            <TableContainer component={Paper} elevation={8}>
                <Table sx={{ minWidth: 150 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {/* <Toolbar
                                sx={{
                                    pl: { sm: 1 },
                                    pr: { xs: 1, sm: 1 },
                                }}
                            >
                                <Typography
                                    sx={{ flex: "1 1 100%" }}
                                    variant="h6"
                                    id="tableTitle"
                                    component="div"
                                >
                                    My Recent Proposals
                                </Typography>
                            </Toolbar> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows2.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    {row.calories}
                                </TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">
                                    {row.protein}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

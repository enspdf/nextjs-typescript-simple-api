import fetch from "isomorphic-unfetch";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";

export default function Vehicles({ list }: any) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Brand</TableCell>
                        <TableCell align="right">Model</TableCell>
                        <TableCell align="right">Owner Id</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((row: any) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">{row.id}</TableCell>
                            <TableCell align="right">{row.brand}</TableCell>
                            <TableCell align="right">{row.model}</TableCell>
                            <TableCell align="right">{row.ownerId}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

Vehicles.getInitialProps = async () => {
    const resp = await fetch("http://localhost:3000/api/vehicles");
    const json = await resp.json();

    return { list: json };
}
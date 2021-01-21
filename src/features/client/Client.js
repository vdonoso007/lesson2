import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addList, clientList, rootReducer } from './clientSlice';
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'
import store from '../../app/store'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    }
})

function createClients(names, email, phone, status) {
    return { names, email, phone, status }
}

const records = [
    createClients('Juan Recalde', 'jrecalde@gmail.com', '0989755008', 'Active'),
    createClients('Marlon Zela', 'mzela@tumail.com', '0978455998', 'Active'),
    createClients('Tony Lopez', 'tlopez@terna.com', '0963744112', 'Active'),
    createClients('Carlos Mape', 'cmape@gmail.com', '0963989562', 'Active')
]

export function Client() {
    
    const classes = useStyles()
    const dispatch = useDispatch()
    //dispatch(addList(records))

    const clientData = store.store.getState().client.client.clients

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Names</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Cell Phone</TableCell>
                        <TableCell>State</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        clientData.map((item) => (
                                <TableRow key={item.names}>
                                    <TableCell component="th" scope="row">{item.names}</TableCell>
                                    <TableCell >{item.email}</TableCell>
                                    <TableCell >{item.phone}</TableCell>
                                    <TableCell >{item.status}</TableCell>
                                </TableRow>
                            )
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )

}
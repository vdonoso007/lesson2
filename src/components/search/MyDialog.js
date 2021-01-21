import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { clientList } from '../../features/client/clientSlice'
import store from '../../app/store'



export default function MyDialog(props) {

    const { open, onClose, user, design } = props

    const handleClose = () => {
        onClose(open);
      };
    
      /*const getClients = () => {
        const clientsData = store.store.getState()
        console.log(JSON.stringify(clientsData))
        return ( clientsData.map((item) => (
            console.log('hola ' + item.names)
            
        )) )
    }*/

    const clientsData = store.store.getState()
    console.log(JSON.stringify(clientsData.client.client.clients))
    

    return (
        <Dialog onClose={handleClose}  open={open}>
            <DialogTitle>Obtener datos para {user} {design}</DialogTitle>
            {clientsData.client.client.clients.map((item) => (
                
                <div>{item.names} - {item.email} - {item.phone} - {item.status}</div>
                
            ))}
        </Dialog>
    )

}
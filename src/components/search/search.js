import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MyDialog from './MyDialog'


class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {user: '', design: '', open: false}

        this.handleChangeUser = this.handleChangeUser.bind(this)
        this.hanldeChangeDesign = this.hanldeChangeDesign.bind(this)
    }

    
    handleChangeUser(event) {
        this.setState({user: event.target.value});
    }

    hanldeChangeDesign(event) {
        this.setState({design: event.target.value});
    }

    handleClickOpenSearch = () => {
        this.setState({open: true})
    }

    handleCloseSearchDialog = (value) => {
        this.setState({open: false})
    }

    render() {

        const classes = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

  



        return (
            <Grid container className={classes.root}  spacing={2}>
                <Grid container justify="center" xs={12}>
                    <Grid item xs={3}>
                        <TextField value={this.state.user} onChange={this.handleChangeUser} id="outlined-basic1" label="usuario" variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField value={this.state.design} onChange={this.hanldeChangeDesign} id="outlined-basic2" label="diseño" variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                        <Button onClick={this.handleClickOpenSearch} variant="contained" color="primary">
                        Buscar
                        </Button>
                        <MyDialog user={this.state.user} design={this.state.design} open={this.state.open} onClose={this.handleCloseSearchDialog} />
                    </Grid>
                </Grid>
            </Grid>
        )
    }


}

export default Search
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
// import RoundButton from '../Reusable_Components/RoundButton'


const PopUp = props => {

    const [modalStyle] = useState(getModalStyle);
    
    function getModalStyle() {
    const top = 50;
    const left = 50;
    
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        };
    }
    
    const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 1000,
        height: 650,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(0, 0, 0),
    },
    }));

    const classes = useStyles();

    return (
        <div >
            Pop up Component
            <Modal
                open={props.open}
                onClose={props.onClose}
                style={modalStyle}
                className={classes.paper}
            >
                {props.body}
            </Modal>
        </div>
    )
}

export default PopUp
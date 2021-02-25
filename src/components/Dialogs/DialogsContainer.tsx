import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {DispatchType, CombinedStateType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state: CombinedStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        NewMessageChange: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
            SendMessage: () => {
        dispatch(sendMessageAC())
    }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
import React from 'react';
import {sendMessageAC} from "../../redux/reducers/dialogs-reducer";
import {DispatchType, AppRootStateType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        SendMessage: (message: string) => {
            dispatch(sendMessageAC(message))
        }
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)

// Compose is alternative to writing the hoc hell, like in the line below.
// export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));
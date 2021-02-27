import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {CombinedStateType} from "../redux/store";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: CombinedStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }

    return connect(mapStateToProps)(RedirectComponent)

}
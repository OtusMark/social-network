import React, {ChangeEvent} from "react";

type propsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<propsType, {}> {

    state = {
        editMode: false,
        status: this.props.status
    }

    // Synchronizing the global value of user status with local, to prevent empty input.
    componentDidUpdate(prevProps: Readonly<propsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    activeEditMode = () => {
        // setState is asynchronous
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        // setState is asynchronous
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activeEditMode}>{this.props.status || 'No status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange}
                               autoFocus={true}
                               onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }

}
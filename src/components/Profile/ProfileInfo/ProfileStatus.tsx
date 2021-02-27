import React from "react";

type propsType = {
    status: string
}

export class ProfileStatus extends React.Component<propsType, {}> {
    state = {
        editMode: false
    }

    activeEditMode() {
        // setState is asynchronous
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        // setState is asynchronous
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activeEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }

}
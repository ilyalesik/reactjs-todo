import React, {Component} from 'react';

class TaskListItem extends Component {
    constructor(props) {
        super(props);

        // Bind this
        this.handleClick = this.handleClick.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleClick(event) {
        this.props.toggleStatus(this.props.item.id);
        event.preventDefault();
    }

    handleRemove(event){
        this.props.destroyTask(this.props.item.id);
        event.preventDefault();
    }

    render() {
        const item = this.props.item;
        return (<li className={"tasks-list__item" + (item.completed ? ' tasks-list__item_completed' : '')}>
            <span className="tasks-list__item-name" onClick={this.handleClick}>{item.name}</span>
            <button className="tasks-list__item-remove" onClick={this.handleRemove}>&#x2715;</button>
        </li>)
    }
}

export default TaskListItem;
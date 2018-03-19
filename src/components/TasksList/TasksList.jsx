import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Scrollbars from 'react-custom-scrollbars';

import TasksListItem from './TasksListItem';

import './TasksList.css';


class TasksList extends Component {
    render() {
        const items = this.props.tasks.map((item) =>
            <TasksListItem item={item} key={item.id} toggleStatus={this.props.toggleStatus}
                           destroyTask={this.props.destroyTask}/>
        );

        return (
            <ul className="tasks-list">
                <Scrollbars>
                    <ReactCSSTransitionGroup transitionName="tasks-list__item-animation" transitionEnterTimeout={200}
                                             transitionLeaveTimeout={300}>
                        {items}
                    </ReactCSSTransitionGroup>
                </Scrollbars>
            </ul>
        );
    }
}

export default TasksList;
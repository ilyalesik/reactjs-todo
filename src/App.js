import React, {Component} from 'react';
import Header from './components/Header/Header';
import NewTaskInput from './components/NewTaskInput/NewTaskInput';
import TasksList from './components/TasksList/TasksList';

import Tasks from './models/Tasks';

import './css/App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: new Tasks()
        };

        // Bind this into functions
        this.addTask = this.addTask.bind(this);
        this.toggleStatus = this.toggleStatus.bind(this);
        this.destroyTask = this.destroyTask.bind(this);
    }

    /**
     * Creates new task
     * @param task
     */
    addTask(task) {
        this.setState(function (prevState) {
            let newList = prevState.tasks;
            newList.addTask(task);

            return {
                tasks: newList
            };
        });
    }

    /**
     * Toggles status of given task
     * @param id
     */
    toggleStatus(id) {
        this.setState(function (prevState) {
            let newList = prevState.tasks;
            newList.setTaskStatus(id, !prevState.tasks.getTask(id).completed);

            return {
                tasks: newList
            };
        });
    }

    /**
     * Destroys given task
     * @param id
     */
    destroyTask(id){
        this.setState(function (prevState) {
            let newList = prevState.tasks;
            newList.destroyTask(id);

            return {
                tasks: newList
            };
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <NewTaskInput addTask={this.addTask}/>
                <TasksList tasks={this.state.tasks.tasksList} toggleStatus={this.toggleStatus} destroyTask={this.destroyTask}/>
            </div>
        );
    }
}

export default App;

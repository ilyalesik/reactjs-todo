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
            tasks: undefined
        };

        // Bind this into functions
        this.addTask = this.addTask.bind(this);
        this.toggleStatus = this.toggleStatus.bind(this);
        this.destroyTask = this.destroyTask.bind(this);
    }

    componentDidMount() {
        const tasks = Tasks.load();
        this.setState({
            tasks
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.tasks !== this.state.tasks;
    }

    /**
     * Creates new task
     * @param task
     */
    addTask(task) {
        this.setState(function (prevState) {
            return {
                tasks: prevState.tasks.addTask(task)
            };
        });
    }

    /**
     * Toggles status of given task
     * @param id
     */
    toggleStatus(id) {
        this.setState(function (prevState) {
            return {
                tasks: prevState.tasks.setTaskStatus(id, !prevState.tasks.getTask(id).completed)
            };
        });
    }

    /**
     * Destroys given task
     * @param id
     */
    destroyTask(id){
        this.setState(function (prevState) {
            return {
                tasks: prevState.tasks.destroyTask(id)
            };
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <NewTaskInput addTask={this.addTask}/>
                <TasksList tasks={this.state.tasks ? this.state.tasks.tasksList : []} toggleStatus={this.toggleStatus} destroyTask={this.destroyTask}/>
            </div>
        );
    }
}

export default App;

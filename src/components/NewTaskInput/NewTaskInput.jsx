import React, {Component} from 'react';

import './NewTaskInput.css';

class NewTaskInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        // Bind this
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        this.props.addTask(this.state.value);
        this.setState({value: ''});
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <form className="new-task-input" onSubmit={this.handleSubmit}>
                <input className="new-task-input__input" value={this.state.value} onChange={this.handleChange}
                       placeholder="Введите новую задачу" required/>
                <button className="new-task-input__button" type="submit" />
            </form>
        );
    }
}

export default NewTaskInput;
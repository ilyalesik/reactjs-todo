/**
 * Container that is responsible for working with tasks list
 */
class Tasks {
    constructor(_currentId, _tasks) {
        this._currentId = _currentId || 0;
        this._tasks = _tasks || {};
    }

    /**
     * Creates new task
     */
    addTask(name) {
        this._currentId++;

        this._tasks[this._currentId] = {
            id: this._currentId,
            completed: false,
            name: name
        };

        this._save();
        return new Tasks(this._currentId, this._tasks);
    }

    /**
     * Return list of all tasks
     * @return {Array}
     */
    get tasksList() {
        return Object.values(this._tasks);
    }

    /**
     * Returns task by given id
     * @param id {number}
     */
    getTask(id) {
        return this._tasks[id];
    }

    /**
     * Changes status of given task
     * @param id {number}
     * @param status {boolean}
     */
    setTaskStatus(id, status) {
        this._tasks[id].completed = status;

        this._save();
        return new Tasks(this._currentId, this._tasks);
    }

    /**
     * Destroys given task
     * @param id
     */
    destroyTask(id) {
        delete this._tasks[id];

        this._save();
        return new Tasks(this._currentId, this._tasks);
    }

    /**
     * Loads tasks from storage
     * @private
     */
    static load() {
        // if no data, initialize it
        const currentId = localStorage.getItem('currentId');
        const tasks = localStorage.getItem('tasks');

        if(currentId === null || tasks === null){
            const _currentId = 0;
            const _tasks = {};
            const newTasks = new Tasks(_currentId, _tasks);
            newTasks._save();

            return newTasks;
        }

        const _currentId = parseInt(currentId, 10);
        const _tasks = JSON.parse(tasks);
        return new Tasks(_currentId, _tasks);
    }

    /**
     * Saves tasks to storage
     * @private
     */
    _save() {
        localStorage.setItem('currentId', this._currentId.toString());
        localStorage.setItem('tasks', JSON.stringify(this._tasks));
    }


}

export default Tasks;
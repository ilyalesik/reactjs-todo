/**
 * Container that is responsible for working with tasks list
 */
class Tasks {
    constructor() {
        this._currentId = 0;
        this._tasks = {};

        this._load();
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
    }

    /**
     * Destroys given task
     * @param id
     */
    destroyTask(id) {
        delete this._tasks[id];

        this._save();
    }

    /**
     * Loads tasks from storage
     * @private
     */
    _load() {
        // if no data, initialize it
        const currentId = localStorage.getItem('currentId');
        const tasks = localStorage.getItem('tasks');

        if(currentId === null || tasks === null){
            this._currentId = 0;
            this.tasks = {};
            this._save();

            return;
        }

        this._currentId = parseInt(currentId, 10);
        this._tasks = JSON.parse(tasks);
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
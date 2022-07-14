const root = new Vue({
    el: '#root',
    data: {
        newTask: '',
        tasks: [
            {
                text: 'Fare la spesa',
                done: false,
            },
            {
                text: 'Andare in palestra',
                done: true,
            },
            {
                text: 'Andare in banca',
                done: false,
            },
            {
                text: 'Incontrare Giorgio',
                done: false,
            },
            {
                text: 'Studiare',
                done: false,
            },
        ]
    },
    methods: {
        removeTask(index){
            this.tasks.splice(index, 1);
        },
        addTask(){
            const newTask = {text: this.newTask, done: false}
            this.tasks.push(newTask);
            this.newTask = '';
        },
    }

})
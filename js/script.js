const root = new Vue({
    el: '#root',
    data: {
        newTask: {
            text: '',
            done: false,
        },
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
            this.tasks.push(this.newTask)
        }
    }

})
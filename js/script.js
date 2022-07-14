const root = new Vue({
    el: '#root',
    data: {
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
        }
    }

})
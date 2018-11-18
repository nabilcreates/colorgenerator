let body = $("body")

// MAIN VUE CODE !!
let app = new Vue({
    el: '.app',

    data() {
        return {
            color: '',
            history: [],
            colorscore: 0,
        }
    },

    methods: {
        setColor(value) {
            body.css('background', value)
            this.color = value

            console.log(value)

            // run the pushtohistory method
            this.pushToHistory(value)

            this.colorscore++

            // RETURNS THE VALUE
            return value
        },

        getRandomColor() {
            // RETURN A RANDOM COLOR
            return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
        },

        pushToHistory(h) {

            // push an object containing the color and date
            this.history.push({
                color: h,
                date: new Date(),
            })
        },

        discoMode(int) {
            setInterval(() => {
                this.setColor(this.getRandomColor())
            }, int)

        }
    },

    mounted() {}
})
export const fruitMixin = {
    data() {
        return {
            friuts: ['apple', 'lemon', 'banana', 'strawberry', 'orange', 'blueberry'],
            filterText: ''
        }
    },
    computed: {
        filteredFriuts() {
            return this.friuts.filter((element) => {
                console.log(element.match(this.filterText))
                return element.match(this.filterText);
            })
        }
    },
    created() {
        console.log('created')
    },
}
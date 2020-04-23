export default {
    props: ['text'],
    computed: {
        visible() {
            return this.text !== null && this.text !== undefined && this.text.trim().length > 0
        }
    },
    template: `<div v-if="visible">
                    <em>{{text}}</em>
               </div>`
}
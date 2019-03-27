export default {
    props: ['msg'],
    
    template: `
        <p class="new-message" :class="{ 'my-message' : matchedID }">
            <span>{{msg.message.name}} says: </span>
            {{msg.message.content}}
        </p>
    `,

    data: function() {
        return {
            matchedID: this.$parent.sockedID == this.msg.id
        }
    }
}
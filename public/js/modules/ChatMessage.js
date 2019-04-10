export default {
    props: ['msg'],
    
    template: `
        <p class="new-message" :class="{ 'my-message' : matchedID }">
            <strong><span>{{msg.message.name}}</span></strong>
            {{msg.message.content}}
        </p>
    `,

    data: function() {
        return {
            matchedID: this.$parent.socketID == this.msg.id
        }
    }
}

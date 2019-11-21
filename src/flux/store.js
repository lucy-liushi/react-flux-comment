import PubSub from 'pubsub-js'
const store={
    list:[
        {
            name:'张三',
            content:'good,good!'
        }
    ],
    getList(){
        return this.list
    },
    addlist(data){
        this.list.push(data)
        console.log(this.list)
        this.addemit()
    },
    dellist(i){
        this.list.splice(i,1)
        this.addemit()
    },
    addlistenner(callback){
        PubSub.subscribe('add',callback)
    },
    addemit(){
        PubSub.publish('add')
    }
}
export default store
import listDispatch from './dispatch'
const action ={
    add(obj){
        listDispatch.dispatch({
            actionType:'ADD',
            data:obj
        })
    },
    del(i){
        listDispatch.dispatch({
            actionType:'DEL',
            data:i
        })
    }
}
export default action
import {Dispatcher} from 'flux'
import store from './store'
const listDispatch =new Dispatcher()
listDispatch.register((action)=>{
switch (action.actionType) {
    case 'ADD':
        store.addlist(action.data)
        break;
    case 'DEL':
        store.dellist(action.data)
        break;
}
})
export default listDispatch
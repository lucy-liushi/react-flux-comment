import React, { Component } from 'react'
import store from './flux/store'
import action from './flux/action'
export default class Right extends Component {
    constructor(props){
        super(props)
        this.state={
            list:store.getList()
        }
        this.addList=this.addList.bind(this)
    }
    componentDidMount(){
        store.addlistenner(this.addList)
    }
    addList(){
        var list=store.list
        this.setState({
            list
        })
    }
    delOne(i){
        action.del(i)
    }
    render() {
        return (
            <div className='right'>
                <ul>
                   {
                       this.state.list.map((item,index)=>{
                       return <li key={index}>
                           <p>{item.name}说：</p>
                           <p>{item.content}</p>
                           <p onClick={this.delOne.bind(this,index)}>删除</p>
                            </li>
                       })
                   }
                </ul>
            </div>
        )
    }
}

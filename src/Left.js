import React, { Component } from 'react'
import store from './flux/store'
import action from './flux/action'
export default class Left extends Component {
    constructor(props){
        super(props)
        this.state={
          list:store.getList()
        }
      }
      add(){
          var name=this.refs.name.value
          var content=this.refs.content.value
          if(!name||!content){
              return false
          }
          action.add({
              name,content
          })
          this.refs.name.value=this.refs.content.value=''
      }
      
    render() {
        return (
            <div className='left'>
                <input type="text" ref='name'/>
                <br/>
                <input type="text" ref='content'/>
                <br/>
                <button onClick={this.add.bind(this)}>提交评论</button>
            </div>
        )
    }
}

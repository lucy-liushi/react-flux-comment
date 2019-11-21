import React, { Component } from 'react'
import Left from './Left'
import Right from './Right'
import './index.css'

export default class App extends Component {
  
  render() {
    return (
      <div>
       <h1>发表对react的评论</h1>
       <Left></Left>
       <Right></Right>
        
      </div>
    )
  }
}

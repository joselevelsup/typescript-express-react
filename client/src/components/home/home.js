import React, { Component } from "react";

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            heroes: [],
            reason: ""
        };
      }
    
      componentDidMount(){
        fetch("/heroes", {
          accept: 'application/json'
        }).then((resp) => {
          return resp.json()
        }).then((data) => { 
            console.log(data);
            if(data.success === true){
                this.setState({
                    heroes: data.heroes
                });
            } else {
                this.setState({
                    reason: data.reason
                });
            }
        }).catch((err) => {
          console.log(err);
        })
      }

    render(){
        const heroes = this.state.heroes.map((hero) => 
            <li>{hero.heroName} {hero.heroPower}</li>
        )
        return (
            <ul>
                {heroes}
            </ul>
        )
    }
}

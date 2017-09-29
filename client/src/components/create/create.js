import React, { Component } from "react";
import { 
    Container,
    Input,
    Button,
    Form
} from "reactstrap";

export default class Create extends Component{

    constructor(props){
        super();
        this.state = {
            heroName: "",
            heroPower: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.makeHero = this.makeHero.bind(this);
    }

    handleChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }

    makeHero(e){
        e.preventDefault();
        fetch("/create/hero", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((resp) => {
            return resp.json();
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })
    }

    render(){
        return (
            <Container>
                <Form onSubmit={this.makeHero}>
                    <Input placeholder="Hero Name" name="heroName" onChange={this.handleChange}  />
                    <Input placeholder="Hero Power" name="heroPower" onChange={this.handleChange} />

                    <Button color="primary">Submit Hero</Button>
                </Form>
            </Container>
        )
    }
}
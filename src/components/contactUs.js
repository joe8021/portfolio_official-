
import * as emailjs from 'emailjs-com'
import $ from 'jquery';

import {
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";



import React, { Component } from 'react';
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios';


class Contact extends Component {

    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }

    render() {
        return (
           //Our form goes here
            <>
                <Container>
                    <h1 className="p-heading1">Get in Touch</h1>
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <FormGroup controlId="formBasicEmail">
                            <Label className="text-muted">Email address</Label>
                            <Input
                                type="email"
                                name="email"
                                value={this.state.email}
                                className="text-primary"
                                onChange={this.handleChange.bind(this, 'email')}
                                placeholder="Enter email"
                            />
                        </FormGroup>
                        <FormGroup controlId="formBasicName">
                            <Label className="text-muted">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                value={this.state.name}
                                className="text-primary"
                                onChange={this.handleChange.bind(this, 'name')}
                                placeholder="Name"
                            />
                        </FormGroup>
                        <FormGroup controlId="formBasicMessage">
                            <Label className="text-muted">Message</Label>
                            <Input
                                type="textarea"
                                name="message"
                                className="text-primary"
                                value={this.state.message}
                                onChange={this.handleChange.bind(this, 'message')}
                            />
                        </FormGroup>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </>
        );
    }

    formSubmit = (e) => {
        e.preventDefault()

        this.setState({
            buttonText: '...sending'
        })

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        axios.post('API_URI', data)
            .then(res => {
                this.setState({ sent: true }, this.resetForm())
            })
            .catch(() => {
                console.log('Message not sent')
            })
    }

    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            buttonText: 'Message Sent'
        })
    }


}

export default Contact;
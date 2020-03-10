
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
            <Container>
               
                <Row>
                    <Col className="ml-auto mr-auto" md="8">
                        <h2 className="text-center">Contact Me</h2>
                        <Form className="contact-form">
                            <Row>
                                <Col md="6">
                                    <label>Name</label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="nc-icon nc-single-02" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Name" type="text" />
                                    </InputGroup>
                                </Col>
                                <Col md="6">
                                    <label>Email</label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="nc-icon nc-email-85" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Email" type="text" />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <label>Message</label>
                            <Input
                                placeholder="Message here..."
                                type="textarea"
                                rows="4"
                            />
                            <Row>
                                <Col className="ml-auto mr-auto" md="4">
                                    <Button className="btn-fill" color="danger" size="lg">
                                        Send Message
                      </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
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
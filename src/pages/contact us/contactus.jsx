import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUsPage = () => {
    return (
        <Container className="py-5">
            <h2 className="text-center mb-5">Contact Us</h2>
            <Row>
                <Col md={6}>
                    <h3>Customer Support</h3>
                    <p>Our dedicated customer support team is available to assist you with any inquiries you may have regarding our products, orders, or services. Feel free to contact us via:</p>
                    <ul>
                        <li>Email: <a href="mailto:customer.support@nexgenmarket.com">customer.support@nexgenmarket.com</a></li>
                        <li>Phone: 1-800-123-4567</li>
                    </ul>
                    <p>You can also reach us through live chat by clicking the chat icon in the bottom right corner of your screen.</p>
                </Col>
                <Col md={6}>
                    <h3>Business Inquiries</h3>
                    <p>For business-related inquiries, partnership opportunities, or media inquiries, please contact us at:</p>
                    <ul>
                        <li>Email: <a href="mailto:business@nexgenmarket.com">business@nexgenmarket.com</a></li>
                    </ul>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md={6}>
                    <h3>Visit Us</h3>
                    <p>If you're in the area, we'd love to meet you in person! Our headquarters are located at:</p>
                    <address>
                        NexGen Market Headquarters<br />
                        123 Main Street<br />
                        City, State, ZIP Code
                    </address>
                </Col>
                <Col md={6}>
                    <h3>Feedback Form</h3>
                    <p>We value your feedback and strive to continuously improve our products and services. Please fill out the form below to share your thoughts with us:</p>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUsPage;

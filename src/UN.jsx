import { Container, Row, Col, Button, Table, Image, Form } from 'react-bootstrap';

export const UN = () =>{
    return (
        <Container>
          <Row className="my-4">
            <Col>
              <h2>Shopping Cart</h2>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Row>
                        <Col xs={3}>
                          <Image src="path-to-image1.jpg" thumbnail />
                        </Col>
                        <Col xs={9}>
                          <span>Quantum X Pro</span>
                        </Col>
                      </Row>
                    </td>
                    <td>$1129.88</td>
                    <td>
                      <Button variant="outline-secondary" size="sm">-</Button>
                      <Form.Control type="text" value="2" className="d-inline mx-2" style={{ width: '40px' }} readOnly />
                      <Button variant="outline-secondary" size="sm">+</Button>
                    </td>
                    <td>$2259.76</td>
                    <td>
                      <Button variant="danger" size="sm">
                        <i className="fas fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Row>
                        <Col xs={3}>
                          <Image src="path-to-image2.jpg" thumbnail />
                        </Col>
                        <Col xs={9}>
                          <span>TechFit Pro Smartwatch</span>
                        </Col>
                      </Row>
                    </td>
                    <td>$129.99</td>
                    <td>
                      <Button variant="outline-secondary" size="sm">-</Button>
                      <Form.Control type="text" value="1" className="d-inline mx-2" style={{ width: '40px' }} readOnly />
                      <Button variant="outline-secondary" size="sm">+</Button>
                    </td>
                    <td>$129.99</td>
                    <td>
                      <Button variant="danger" size="sm">
                        <i className="fas fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Button variant="secondary">Continue Shopping</Button>
              <Button variant="outline-danger" className="mx-2">Clear Cart</Button>
            </Col>
            <Col md={4}>
              <div className="border p-3">
                <h4>Order Details</h4>
                <Row>
                  <Col>Sub Total</Col>
                  <Col className="text-right">$2389.75</Col>
                </Row>
                <Row>
                  <Col>Tax</Col>
                  <Col className="text-right">$0</Col>
                </Row>
                <Row>
                  <Col>Total Amount</Col>
                  <Col className="text-right">$2389.75</Col>
                </Row>
                <Button variant="primary" className="mt-3" block>Pay $2389.75</Button>
              </div>
            </Col>
          </Row>
        </Container>
    )

}
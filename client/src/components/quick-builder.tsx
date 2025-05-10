import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import { AlertHeading, Form, FormText } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { FileInput } from './fileInput';
import { useState } from 'react';

export function QuickBuilder() {
    const [fileContent, setFileContent] = useState("");

    const handleAutoFill = () => {
        console.log(fileContent);
    }

    return (
        <Container className="QuickBuilder">
            <br />
            <h1>Quick Builder</h1>
            <br />
            <Tab.Container>
                <h3>Add Your Deck Information</h3>
                <Row>
                    <Col sm={7}>
                        <Alert variant='light'>
                        Already have your deck information? Upload your plain text (.txt) file.
                        <br/>
                        <br/>
                            <Form.Group controlId="formFile" className="mb-3">
                            <FileInput 
                                setFileContent={setFileContent}
                            />
                            <FormText>
                                <br/>
                                <Row>
                                    <Col sm={2}>
                                        <Button 
                                            size='sm'
                                            onClick={handleAutoFill}>
                                            Auto Fill
                                        </Button>
                                    </Col>
                                </Row>
                            </FormText>
                            </Form.Group>
                        </Alert>
                    </Col>
                </Row>
                <Form.Label htmlFor='commander'><h4>Commander</h4></Form.Label>
                <Form.Control
                    type='text'
                    placeholder='1x Card Name'
                    id='inputCommanderCard'
                    aria-describedby='commanderCard'
                />
                <Form.Text id='commanderHelpBlock' muted>
                    Input your commander card. Indicate quantity with a number then x.
                </Form.Text>
                <br/>
                <br/>
                <Form.Label htmlFor='main'><h4>Main</h4></Form.Label>
                <InputGroup className='mainCards'>
                    <Form.Control
                        as='textarea'
                        rows={10}
                        placeholder='1x Card Name'
                        id='inputMainCards'
                        aria-describedby='mainCards'
                    />
                </InputGroup>
                <Form.Text id='mainHelpBlock' muted>
                    Input the cards for your main deck. Each card must be on a new line. Indicate quantity with a number then x.
                </Form.Text>
            </Tab.Container>
            <br/>
            <br/>
            <Row>
                <Col sm={1}><Button>Validate</Button></Col>
                <Col sm={2}><Button>Build</Button></Col>
            </Row>
            <br/>
            <br/>
        </Container>
        
    );
}

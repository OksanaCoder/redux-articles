import React, { useState } from 'react'
import { Container, Form, Button, Modal } from 'react-bootstrap'
import  { addArticle } from '../actions/index'
import { connect, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

// function mapDispatchToProps(dispatch) {
//     return {
//         addArticle: article => dispatch(addArticle(article))
//     }
// }


const FormArticle = ({addArticle}) => {
    
    
    const [show, setShow] = useState(false);

    const handleClose = (e) => {
        e.preventDefault()
        setShow(false)
    } 
    const handleSubmit = (e) => {
        e.preventDefault()
        setShow(false)
        setTitle('')
        setContent('')
        addArticle({ id: uuidv4(), title, content})
    }
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
    }
    const handleChange2 = (e) => {
        e.preventDefault()
        setContent(e.target.value)
    }
    return (
        <Container>
            <Button variant="primary" onClick={handleShow}>
                Add new article
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>New article</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                             type="text" 
                             placeholder="Enter title" 
                             value={title}  
                             onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicContent">
                        <Form.Label>Content</Form.Label>
                        <Form.Control 
                               type="text" 
                               placeholder="Enter text" 
                               value={content}  
                               onChange={handleChange2}/>
                    </Form.Group>
                    
                   
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
           
        </Container>
    )
}
const mapDispatchToProps = { addArticle };

export default connect(
    null,
    mapDispatchToProps
  )(FormArticle)
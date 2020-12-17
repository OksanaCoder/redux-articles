import React, { useState } from 'react'
import { Container, Button, Modal, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import FormArticle from './FormArticle'
import  { deleteArticle, editArticle } from '../actions/index'

const mapStateToProps = state => {
    return { articles: state.articles }
}

const List = ({ articles,  deleteArticle}) => {
  
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
        editArticle({  title, content})
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

    return(
        <Container>
            <h4 className='mt-5'>List of articles</h4>
            <ul className='list-unstyled mt-5'>
                { articles.map(el => (
                    <>
                    <li className='box' key={el.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <h5>{el.title}</h5>
                            <span>{el.content}</span>
                        </div>
                    <div>
                    <Button variant="primary" onClick={() => deleteArticle(el.id)} >
                        Delete
                    </Button>
                    <Button variant="success"  onClick={handleShow} className='ml-3'>
                        Edit
                    </Button>
                    </div>
                    </li>
                    <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Edit article</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                                 type="text" 
                                 placeholder="Enter title" 
                                 value={title}  
                                 onChange={handleChange}
                                 />
                        </Form.Group>
    
                        <Form.Group controlId="formBasicContent">
                            <Form.Label>Content</Form.Label>
                            <Form.Control 
                                   type="text" 
                                   placeholder="Enter text" 
                                   value={content}  
                                   onChange={handleChange2}
                                   />
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
                </>
                ))}
            </ul>
            <FormArticle />

            
        </Container>
    )
}
 function mapDispatchToProps(dispatch) {
        return {
            deleteArticle: article => dispatch(deleteArticle(article))
        }
    }
export default connect(mapStateToProps, mapDispatchToProps)(List)
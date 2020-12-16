import React from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import FormArticle from './FormArticle'

const mapStateToProps = state => {
    return { articles: state.articles }
}

const List = ({ articles }) => {
  
    return(
        <Container>
            <h4 className='mt-5'>List of articles</h4>
            <ul className='list-unstyled mt-5'>
                { articles.map(el => (
                    <li className='box' key={el.id}>
                        <h5>{el.title}</h5>
                        <span>{el.content}</span>
                   
                    </li>
                ))}
            </ul>
            <FormArticle />
        </Container>
    )
}

export default connect(mapStateToProps)(List)
import { ADD_ARTICLE } from '../actions/index'
import { DELETE_ARTICLE } from '../actions/index'

const initialState = {
    articles : [
        { title: 'Article 1', id: 1, content: 'Description'},
        { title: 'Article 2', id: 2, content: 'Description 2'},
        { title: 'Article 3', id: 3, content: 'Description 3'}
    ]
}
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTICLE: {
            return { 
                ...state,
                articles: [...state.articles, action.payload]
            } 
        }
        case DELETE_ARTICLE: {
            return { 
                ...state,
                articles:  state.articles.filter(i => i.id !== action.payload) 
            } 
        }
    }
    return state
}

export default rootReducer
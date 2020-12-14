import { ADD_ARTICLE } from '../actions/index'

const initialState = {
    articles : [
        { title: 'Article 1', id: 1},
        { title: 'Article 2', id: 2},
        { title: 'Article 3', id: 3}
    ]
}
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTICLE: {
            return { 
                ...state,
                articles: action.payload
            } 
        }
    }
    return state
}

export default rootReducer
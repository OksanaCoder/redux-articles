export const ADD_ARTICLE = 'ADD_ARTICLE'
export const DELETE_ARTICLE = 'DELETE_ARTICLE'

export function addArticle(payload) {
    return {
        type: ADD_ARTICLE, 
        payload
    }
}

export function deleteArticle(payload) {
    return {
        type: DELETE_ARTICLE, 
        payload
    }
}

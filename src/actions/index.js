export const ADD_ARTICLE = 'ADD_ARTICLE'
export const DELETE_ARTICLE = 'DELETE_ARTICLE'
export const EDIT_ARTICLE = 'EDIT_ARTICLE'
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

export function editArticle(payload) {
    return {
        type: EDIT_ARTICLE, 
        payload
    }
}

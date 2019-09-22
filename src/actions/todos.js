export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text: text
    }
}

export function cleanTodos() {
    return {
        type: 'CLEAN_TODOS'
    }
}
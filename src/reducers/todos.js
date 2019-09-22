export default function todos(state = [], action) {

    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: Math.random(),
                text: action.text
            }]
        case 'CLEAN_TODOS':
            return []
        default:
            return state;
    }

}
import * as types from '../constants/actionTypes'


const initialState = {
    destination: '',
    startDate: '',
    endDate: '',

}

const tripReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.NEW_DESTINATION: {
            const destination = action.payload;
            return {
                ...state,
                destination,
            }
        }
        case types.NEW_START_DATE: {
            const startDate = action.payload;
            return {
                ...state,
                startDate,
            }
        }
        case types.NEW_END_DATE: {
            const endDate = action.payload;
            return {
                ...state,
                endDate,
            }
        }
    }
}

export default tripReducer;
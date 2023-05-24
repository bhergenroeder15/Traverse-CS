import * as types from '../constants/actionTypes';

export const addEventActionCreator = () => ({
    type: types.ADD_EVENT,
});

export const openFormActionCreator = () => ({
    type: types.OPEN_FORM,
});

export const closeFormActionCreator = () => ({
    type: types.CLOSE_FORM,
});

export const addTripActionCreator = () => ({
    type: types.ADD_TRIP,
});

export const newDestinationActionCreator = value => ({
    type: types.NEW_DESTINATION,
    payload: value,
})

export const newStartDateActionCreator = value => ({
    type: types.NEW_START_DATE,
    payload: value,
})

export const newEndDateActionCreator = value => ({
    type: types.NEW_END_DATE,
    payload: value,
})

export const deleteTripActionCreator = () => ({
    type: types.DELETE_TRIP,
});

export const expandTripActionCreator = () => ({
    type: types.EXPAND_TRIP,
});

export const addDaysActionCreator = () => ({
    type: types.ADD_DAYS,
})
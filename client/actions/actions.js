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

export const addItineraryActionCreator = () => ({
    type: types.ADD_ITINERARY,
});

export const deleteTripActionCreator = () => ({
    type: types.DELETE_TRIP,
});

export const expandTripActionCreator = () => ({
    type: types.EXPAND_TRIP,
});

export const addDaysActionCreator = () => ({
    type: types.ADD_DAYS,
})
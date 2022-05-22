import {
	DISPLAY_ALERT,
	CLEAR_ALERT,
	REGISTER_USER_BEGIN,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_ERROR,
	LOGIN_USER_BEGIN,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_ERROR,
	LOGOUT_USER,
	UPDATE_USER_BEGIN,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_ERROR,
	CLEAR_VALUES,
	LIST_ROOM_BEGIN,
	LIST_ROOM_SUCCESS,
	LIST_ROOM_ERROR,
	GET_MY_ROOMS_BEGIN,
	GET_MY_ROOMS_SUCCESS,
	SET_EDIT_ROOM,
	DELETE_ROOM_BEGIN,
	EDIT_ROOM_BEGIN,
	EDIT_ROOM_SUCCESS,
	EDIT_ROOM_ERROR,
	LIST_ROOMMATE_BEGIN,
	LIST_ROOMMATE_SUCCESS,
	LIST_ROOMMATE_ERROR,
	GET_MY_ROOMMATES_BEGIN,
	GET_MY_ROOMMATES_SUCCESS,
	SET_EDIT_ROOMMATE,
	DELETE_ROOMMATE_BEGIN,
	EDIT_ROOMMATE_BEGIN,
	EDIT_ROOMMATE_SUCCESS,
	EDIT_ROOMMATE_ERROR,
	GET_ROOMS_BEGIN,
	GET_ROOMS_SUCCESS,
	GET_ROOMMATES_BEGIN,
	GET_ROOMMATES_SUCCESS,
	GET_SINGLE_ROOM_BEGIN,
	GET_SINGLE_ROOM_SUCCESS,
	GET_SINGLE_ROOMMATE_BEGIN,
	GET_SINGLE_ROOMMATE_SUCCESS,
	CLEAR_FILTERS,
	HANDLE_CHANGE,
	CHANGE_PAGE,
} from "./Actions";

import { initialState } from "./AppContext";

const Reducer = (state, action) => {
	if (action.type === DISPLAY_ALERT) {
		return {
			...state,
			showAlert: true,
			alertType: "error",
			alertText: "Providing all values is required",
		};
	}

	if (action.type === CLEAR_ALERT) {
		return {
			...state,
			showAlert: false,
			alertType: "",
			alertText: "",
		};
	}

	// * USER
	if (action.type === REGISTER_USER_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}

	if (action.type === REGISTER_USER_SUCCESS) {
		return {
			...state,
			user: action.payload.user,
			token: action.payload.token,
			isLoading: false,
			showAlert: true,
			alertType: "success",
			alertText: "Account successfully created! Redirecting...",
		};
	}

	if (action.type === REGISTER_USER_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: "error",
			alertText: action.payload.msg,
		};
	}

	if (action.type === LOGIN_USER_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}

	if (action.type === LOGIN_USER_SUCCESS) {
		return {
			...state,
			user: action.payload.user,
			token: action.payload.token,
			isLoading: false,
			showAlert: true,
			alertType: "success",
			alertText: "Login successful! Redirecting...",
		};
	}

	if (action.type === LOGIN_USER_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: "error",
			alertText: action.payload.msg,
		};
	}

	if (action.type === LOGOUT_USER) {
		return {
			...initialState,
			user: null,
			token: null,
		};
	}

	if (action.type === UPDATE_USER_BEGIN) {
		return { ...state, isLoading: true };
	}

	if (action.type === UPDATE_USER_SUCCESS) {
		return {
			...state,
			isLoading: false,
			token: action.payload.token,
			user: action.payload.user,
			showAlert: true,
			alertType: "success",
			alertText: "Settings successfully updated!",
		};
	}

	if (action.type === UPDATE_USER_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: "error",
			alertText: action.payload.msg,
		};
	}

	if (action.type === CLEAR_VALUES) {
		const initialState = {
			isEditingRoom: false,
			editRoomId: "",
			room: null,
			isEditingRoommate: false,
			editRoommateId: "",
			roommate: null,
		};
		return {
			...state,
			...initialState,
		};
	}

	// * ROOM
	if (action.type === LIST_ROOM_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}

	if (action.type === LIST_ROOM_SUCCESS) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: "success",
			alertText: "Listing successfully created!",
		};
	}

	if (action.type === LIST_ROOM_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: "error",
			alertText: action.payload.msg,
		};
	}

	if (action.type === GET_MY_ROOMS_BEGIN) {
		return {
			...state,
			isLoading: true,
			showAlert: false,
		};
	}

	if (action.type === GET_MY_ROOMS_SUCCESS) {
		return {
			...state,
			isLoading: false,
			rooms: action.payload.rooms,
			totalRooms: action.payload.totalRooms,
		};
	}

	if (action.type === SET_EDIT_ROOM) {
		const room = state.rooms.find((room) => room._id === action.payload.id);

		return {
			...state,
			isEditingRoom: true,
			editRoomId: room._id,
			room,
		};
	}

	if (action.type === DELETE_ROOM_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}

	if (action.type === EDIT_ROOM_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}

	if (action.type === EDIT_ROOM_SUCCESS) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: "success",
			alertText: "Listing successfully updated!",
			room: action.payload.room,
		};
	}

	if (action.type === EDIT_ROOM_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: "error",
			alertText: action.payload.msg,
		};
	}

	// * ROOMMATE
	if (action.type === LIST_ROOMMATE_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}

	if (action.type === LIST_ROOMMATE_SUCCESS) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: "success",
			alertText: "Listing successfully created!",
		};
	}

	if (action.type === LIST_ROOMMATE_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: "error",
			alertText: action.payload.msg,
		};
	}

	if (action.type === GET_MY_ROOMMATES_BEGIN) {
		return {
			...state,
			isLoading: true,
			showAlert: false,
		};
	}

	if (action.type === GET_MY_ROOMMATES_SUCCESS) {
		return {
			...state,
			isLoading: false,
			roommates: action.payload.roommates,
			totalRoommates: action.payload.totalRoommates,
		};
	}

	if (action.type === SET_EDIT_ROOMMATE) {
		const roommate = state.roommates.find(
			(roommate) => roommate._id === action.payload.id
		);

		return {
			...state,
			isEditingRoommate: true,
			editRoommateId: roommate._id,
			roommate,
		};
	}

	if (action.type === DELETE_ROOMMATE_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}

	if (action.type === EDIT_ROOMMATE_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}

	if (action.type === EDIT_ROOMMATE_SUCCESS) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: "success",
			alertText: "Listing successfully updated!",
		};
	}

	if (action.type === EDIT_ROOMMATE_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: "error",
			alertText: action.payload.msg,
		};
	}

	if (action.type === HANDLE_CHANGE) {
		return {
			...state,
			currentPageRoom: 1,
			currentPageRoommate: 1,
			[action.payload.name]: action.payload.value,
		};
	}

	if (action.type === CHANGE_PAGE) {
		return {
			...state,
			currentPageRoom: action.payload.page,
			currentPageRoommate: action.payload.page,
		};
	}

	// * PUBLIC LISTINGS
	if (action.type === CLEAR_FILTERS) {
		return {
			...state,
			searchRoomProperty: "All",
			searchRoomType: "",
			searchRoomMain: "",
			sortRoom: "Latest",

			roommateRoomType: "",
			searchRoommateMain: "",
			sortRoommate: "Latest",
		};
	}

	if (action.type === GET_ROOMS_BEGIN) {
		return {
			...state,
			isLoading: true,
			showAlert: false,
		};
	}

	if (action.type === GET_ROOMS_SUCCESS) {
		return {
			...state,
			isLoading: false,
			listingsRooms: action.payload.listingsRooms,
			totalRoomListings: action.payload.totalRoomListings,
			totalRoomPages: action.payload.totalRoomPages,
		};
	}

	if (action.type === GET_ROOMMATES_BEGIN) {
		return {
			...state,
			isLoading: true,
			showAlert: false,
		};
	}

	if (action.type === GET_ROOMMATES_SUCCESS) {
		return {
			...state,
			isLoading: false,
			listingsRoommates: action.payload.listingsRoommates,
			totalRoommateListings: action.payload.totalRoommateListings,
			totalRoommatePages: action.payload.totalRoommatePages,
		};
	}

	// * PUBLIC LISTING DETAILS

	if (action.type === GET_SINGLE_ROOM_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}

	if (action.type === GET_SINGLE_ROOM_SUCCESS) {
		return {
			...state,
			isLoading: false,
			// room: action.payload.room,
		};
	}

	if (action.type === GET_SINGLE_ROOMMATE_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}

	if (action.type === GET_SINGLE_ROOMMATE_SUCCESS) {
		return {
			...state,
			isLoading: false,
			roommate: action.payload.roommate,
		};
	}

	throw new Error(`No such action : ${action.type}`);
};

export default Reducer;

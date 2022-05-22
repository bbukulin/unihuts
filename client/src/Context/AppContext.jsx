import axios from "axios";
import Reducer from "./Reducer";
import React, { useReducer, useContext } from "react";

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

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
	// * App
	isLoading: false,
	showAlert: false,
	alertText: "",
	alertType: "",
	user: user ? JSON.parse(user) : null,
	token: token,

	// * Room listing
	isEditingRoom: false,
	editRoomId: "",
	room: null,
	rooms: [],
	totalRooms: 0,

	// * Roommate listing
	isEditingRoommate: false,
	editRoommateId: "",
	roommate: null,
	roommates: [],
	totalRoommates: 0,

	// * PUBLIC ROOMS
	listingsRooms: [],
	totalRoomListings: 0,
	totalRoomPages: 1,
	currentPageRoom: 1,

	// Room filter & sort
	searchRoomProperty: "All",
	propertyOptions: ["All", "House", "Apartment"],

	searchRoomType: "",
	roomOptions: ["Private", "Shared"],

	searchRoomMain: "",

	sortRoom: "Latest",
	sortOptionsRoom: ["Latest", "Oldest", "HRK Low to high", "HRK High to low"],

	// * PUBLIC ROOMMATES
	listingsRoommates: [],
	totalRoommateListings: 0,
	totalRoommatePages: 1,
	currentPageRoommate: 1,

	// Roommate filter & sort
	roommateRoomType: "",
	searchRoommateMain: "",
	sortRoommate: "Latest",
	sortOptionsRoommate: [
		"Latest",
		"Oldest",
		"Budget Low to high",
		"Budget High to low",
	],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	// * AXIOS
	const authFetch = axios.create({
		baseURL: "/api/v1",
	});

	// * REQUEST
	authFetch.interceptors.request.use(
		(config) => {
			config.headers.common["Authorization"] = `Bearer ${state.token}`;
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	// * RESPONSE
	authFetch.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			if (error.response.status === 401) {
				logoutUser();
			}
			return Promise.reject(error);
		}
	);

	const addUserToLocalStorage = ({ user, token }) => {
		// ! stringify - object
		localStorage.setItem("user", JSON.stringify(user));
		localStorage.setItem("token", token);
	};

	const removeUserFromLocalStorage = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("token");
	};

	// * REGISTER USER
	const registerUser = async (currentUser) => {
		dispatch({ type: REGISTER_USER_BEGIN });
		try {
			const response = await axios.post("/api/v1/auth/register", currentUser);
			const { user, token } = response.data;
			dispatch({
				type: REGISTER_USER_SUCCESS,
				payload: {
					user,
					token,
				},
			});
			addUserToLocalStorage({ user, token });
		} catch (error) {
			dispatch({
				type: REGISTER_USER_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	// * LOGIN USER
	const loginUser = async (currentUser) => {
		dispatch({ type: LOGIN_USER_BEGIN });
		try {
			const { data } = await axios.post("/api/v1/auth/login", currentUser);
			const { user, token } = data;

			dispatch({
				type: LOGIN_USER_SUCCESS,
				payload: {
					user,
					token,
				},
			});

			addUserToLocalStorage({ user, token });
		} catch (error) {
			dispatch({
				type: LOGIN_USER_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	// * LOGOUT USER
	const logoutUser = () => {
		dispatch({ type: LOGOUT_USER });
		removeUserFromLocalStorage();
	};

	// * UPDATE USER
	const updateUser = async (currentUser) => {
		dispatch({ type: UPDATE_USER_BEGIN });
		try {
			const { data } = await authFetch.patch("/auth/updateUser", currentUser);

			const { user, token } = data;

			dispatch({ type: UPDATE_USER_SUCCESS, payload: { user, token } });

			addUserToLocalStorage({ user, token });
		} catch (error) {
			if (error.response.status !== 401) {
				dispatch({
					type: UPDATE_USER_ERROR,
					payload: { msg: error.response.data.msg },
				});
			}
		}
		clearAlert();
	};

	// * ROOM
	const listRoom = async (currentRoom) => {
		dispatch({ type: LIST_ROOM_BEGIN });
		try {
			const response = await authFetch.post("/listing/room", currentRoom);

			const { room } = response.data;

			dispatch({
				type: LIST_ROOM_SUCCESS,
				payload: {
					room,
				},
			});
			dispatch({ type: CLEAR_VALUES });
		} catch (error) {
			if (error.response.status === 401) return;
			dispatch({
				type: LIST_ROOM_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	const getMyRooms = async () => {
		const { searchRoomProperty, searchRoomType, searchRoomMain, sortRoom } =
			state;

		let url = `/listing/my-rooms?propertyType=${searchRoomProperty}&sort=${sortRoom}`;

		if (searchRoomType) {
			url = url + `&roomType=${searchRoomType}`;
		}

		if (searchRoomMain) {
			url = url + `&search=${searchRoomMain}`;
		}

		dispatch({ type: GET_MY_ROOMS_BEGIN });
		try {
			const { data } = await authFetch.get(url);
			const { rooms, totalRooms } = data;
			dispatch({
				type: GET_MY_ROOMS_SUCCESS,
				payload: {
					rooms,
					totalRooms,
				},
			});
		} catch (error) {
			logoutUser();
		}
		clearAlert();
	};

	const setEditRoom = (id) => {
		dispatch({ type: SET_EDIT_ROOM, payload: { id } });
	};

	const editRoom = async (currentRoom) => {
		dispatch({ type: EDIT_ROOM_BEGIN });
		try {
			const { data } = await authFetch.patch(
				`/listing/update-room/${state.editRoomId}`,
				currentRoom
			);

			const { room } = data;

			dispatch({
				type: EDIT_ROOM_SUCCESS,
				payload: { room },
			});
			dispatch({ type: CLEAR_VALUES });
		} catch (error) {
			if (error.response.status === 401) return;
			dispatch({
				type: EDIT_ROOM_ERROR,
				payload: { msg: error.message.data.msg },
			});
		}
		clearAlert();
	};

	const deleteRoom = async (roomId) => {
		dispatch({ type: DELETE_ROOM_BEGIN });
		try {
			await authFetch.delete(`/listing/room/${roomId}`);
			getMyRooms();
		} catch (error) {
			logoutUser();
		}
	};

	// * ROOMMATE
	const listRoommate = async (currentRoommate) => {
		dispatch({ type: LIST_ROOMMATE_BEGIN });
		try {
			const response = await authFetch.post(
				"/listing/roommate",
				currentRoommate
			);

			const { roommate } = response.data;

			dispatch({
				type: LIST_ROOMMATE_SUCCESS,
				payload: {
					roommate,
				},
			});
			dispatch({ type: CLEAR_VALUES });
		} catch (error) {
			if (error.response.status === 401) return;
			dispatch({
				type: LIST_ROOMMATE_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	const getMyRoommates = async () => {
		const { roommateRoomType, searchRoommateMain, sortRoommate } = state;

		let url = `/listing/my-roommates?sort=${sortRoommate}`;

		if (roommateRoomType) {
			url = url + `&desiredRoomType=${roommateRoomType}`;
		}

		if (searchRoommateMain) {
			url = url + `&search=${searchRoommateMain}`;
		}

		dispatch({ type: GET_MY_ROOMMATES_BEGIN });
		try {
			const { data } = await authFetch.get(url);
			const { roommates, totalRoommates } = data;
			dispatch({
				type: GET_MY_ROOMMATES_SUCCESS,
				payload: {
					roommates,
					totalRoommates,
				},
			});
		} catch (error) {
			logoutUser();
		}
		clearAlert();
	};

	const setEditRoommate = (id) => {
		dispatch({ type: SET_EDIT_ROOMMATE, payload: { id } });
	};

	const editRoommate = async (currentRoommate) => {
		dispatch({ type: EDIT_ROOMMATE_BEGIN });
		try {
			const { data } = await authFetch.patch(
				`/listing/update-roommate/${state.editRoommateId}`,
				currentRoommate
			);

			const { roommate } = data;

			dispatch({
				type: EDIT_ROOMMATE_SUCCESS,
				payload: { roommate },
			});
			dispatch({ type: CLEAR_VALUES });
		} catch (error) {
			if (error.response.status === 401) return;
			dispatch({
				type: EDIT_ROOMMATE_ERROR,
				payload: { msg: error.message.data.msg },
			});
		}
		clearAlert();
	};

	const deleteRoommate = async (roommateId) => {
		dispatch({ type: DELETE_ROOMMATE_BEGIN });
		try {
			await authFetch.delete(`/listing/roommate/${roommateId}`);
			getMyRoommates();
		} catch (error) {
			logoutUser();
		}
	};

	// * PUBLIC LISTINGS
	const getAllRooms = async () => {
		const {
			searchRoomProperty,
			searchRoomType,
			searchRoomMain,
			sortRoom,
			currentPageRoom,
		} = state;

		let url = `api/v1/public/rooms?currentPageRoom=${currentPageRoom}&propertyType=${searchRoomProperty}&sort=${sortRoom}`;

		if (searchRoomType) {
			url = url + `&roomType=${searchRoomType}`;
		}

		if (searchRoomMain) {
			url = url + `&search=${searchRoomMain}`;
		}

		dispatch({ type: GET_ROOMS_BEGIN });
		try {
			const { data } = await axios.get(url);
			const { listingsRooms, totalRoomListings, totalRoomPages } = data;
			dispatch({
				type: GET_ROOMS_SUCCESS,
				payload: {
					listingsRooms,
					totalRoomListings,
					totalRoomPages,
				},
			});
		} catch (error) {
			console.log(error.response);
		}
	};

	const getAllRoommates = async () => {
		const {
			roommateRoomType,
			searchRoommateMain,
			sortRoommate,
			currentPageRoommate,
		} = state;

		let url = `api/v1/public/roommates?currentPageRoommate=${currentPageRoommate}&sort=${sortRoommate}`;

		if (roommateRoomType) {
			url = url + `&desiredRoomType=${roommateRoomType}`;
		}

		if (searchRoommateMain) {
			url = url + `&search=${searchRoommateMain}`;
		}

		dispatch({ type: GET_ROOMMATES_BEGIN });
		try {
			const { data } = await axios.get(url);
			const { listingsRoommates, totalRoommateListings, totalRoommatePages } =
				data;
			dispatch({
				type: GET_ROOMMATES_SUCCESS,
				payload: {
					listingsRoommates,
					totalRoommateListings,
					totalRoommatePages,
				},
			});
		} catch (error) {
			console.log(error.response);
		}
	};

	const getSingleRoom = async (roomId) => {
		dispatch({ type: GET_SINGLE_ROOM_BEGIN });
		try {
			const data = await axios.get(`/api/v1/public/room/${roomId}`);
			console.log(data);
			const { room } = data;
			dispatch({
				type: GET_SINGLE_ROOM_SUCCESS,
				payload: {
					room,
				},
			});
		} catch (error) {
			console.log(error.response);
		}
	};

	const getSingleRoommate = async (id) => {
		dispatch({ type: GET_SINGLE_ROOMMATE_BEGIN });
		try {
			const roommate = state.listingsRoommates.find(
				(roommate) => roommate._id === id
			);
			dispatch({
				type: GET_SINGLE_ROOMMATE_SUCCESS,
				payload: {
					roommate,
				},
			});
		} catch (error) {
			console.log(error.response);
		}
	};

	// * MISC
	const handleChange = ({ name, value }) => {
		dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
	};

	const clearFilters = () => {
		dispatch({ type: CLEAR_FILTERS });
	};

	const changePage = (page) => {
		dispatch({ type: CHANGE_PAGE, payload: { page } });
	};

	const clearValues = () => {
		dispatch({ type: CLEAR_VALUES });
	};

	const displayAlert = () => {
		dispatch({ type: DISPLAY_ALERT });
		clearAlert();
	};

	const clearAlert = () => {
		setTimeout(() => {
			dispatch({ type: CLEAR_ALERT });
		}, 3000);
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				displayAlert,
				clearAlert,
				registerUser,
				loginUser,
				logoutUser,
				updateUser,
				clearValues,
				listRoom,
				getMyRooms,
				setEditRoom,
				editRoom,
				deleteRoom,
				listRoommate,
				getMyRoommates,
				setEditRoommate,
				editRoommate,
				deleteRoommate,
				getAllRooms,
				getAllRoommates,
				handleChange,
				clearFilters,
				changePage,
				getSingleRoom,
				getSingleRoommate,
			}}>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };

import axios from "axios";

const serverUrl = "https://meow-meow-feeder.herokuapp.com/api/v1";

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: "loginRequest" });

		const { data } = await axios.post(
			`${serverUrl}/login`,
			{ email, password },
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		console.log(data);
		dispatch({ type: "loginSuccess", payload: data });
	} catch (error) {
		dispatch({ type: "loginFailure", payload: error.response.data.message });
	}
};

export const loadUser = () => async (dispatch) => {
	try {
		dispatch({ type: "loadUserRequest" });

		const { data } = await axios.get(`${serverUrl}/me`);
		dispatch({ type: "loadUserSuccess", payload: data });
	} catch (error) {
		dispatch({ type: "loadUserFailure", payload: error.response.data.message });
	}
};

export const updateIp = (ip) => async (dispatch) => {
	try {
		dispatch({ type: "updateIpRequest" });
		const { data } = await axios.post(
			`${serverUrl}/updateIp`,
			{
				ip_address: ip,
			},
			{
				header: {
					"Content-Type": "application/json",
				},
			}
		);
		dispatch({ type: "updateIpSuccess", payload: data.message });
	} catch (error) {
		dispatch({
			type: "updateIpRequest",
			payload: error.response.data.message,
		});
	}
};

export const updatePet = (formData) => async (dispatch) => {
	try {
		dispatch({ type: "updatePetRequest" });
		const { petId, name, hour, minute, cup } = formData;
		const { data } = await axios.put(
			`${serverUrl}/Pet/${petId}`,
			{ petId, name, hour, minute, cup },
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		dispatch({ type: "updatePetSuccess", payload: data.message });
	} catch (error) {
		dispatch({
			type: "updatePetFailure",
			payload: error.response.data.message,
		});
	}
};

export const sendPets = (ip, pets) => async (dispatch) => {
	try {
		dispatch({ type: "sendPetsRequest" });
		console.log(pets);
		console.log(`Making api call to ${ip} with ${pets}`);
		console.log("Send Pet request");
		const { data } = await axios.post(
			`http://${ip}:3000/runPython`,
			{ pets },
			{
				headers: {
					"Content-type": "application/json",
				},
			}
		);
		console.log(data);
		dispatch({ type: "sendPetsSuccess", payload: data.message });
	} catch (error) {
		dispatch({ type: "sendPetsFailure", payload: error.response.data.message });
	}
};

export const removePet = (petId) => async (dispatch) => {
	try {
		dispatch({ type: "removePetRequest" });

		const { data } = await axios.delete(`${serverUrl}/Pet/${petId}`);
		dispatch({ type: "removePetSuccess", payload: data.message });
	} catch (error) {
		dispatch({
			type: "removePetFailure",
			payload: error.response.data.message,
		});
	}
};

export const addTask = (title, description) => async (dispatch) => {
	try {
		dispatch({ type: "addTaskRequest" });

		const { data } = await axios.post(
			`${serverUrl}/newtask`,
			{
				title,
				description,
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		dispatch({ type: "addTaskSuccess", payload: data.message });
	} catch (error) {
		dispatch({ type: "addTaskFailure", payload: error.response.data.message });
	}
};

export const updateTask = (taskId) => async (dispatch) => {
	try {
		dispatch({ type: "updateTaskRequest" });

		const { data } = await axios.get(`${serverUrl}/task/${taskId}`);
		dispatch({ type: "updateTaskSuccess", payload: data.message });
	} catch (error) {
		dispatch({
			type: "updateTaskFailure",
			payload: error.response.data.message,
		});
	}
};

export const deleteTask = (taskId) => async (dispatch) => {
	try {
		dispatch({ type: "deleteTaskRequest" });

		const { data } = await axios.delete(`${serverUrl}/task/${taskId}`);
		dispatch({ type: "deleteTaskSuccess", payload: data.message });
	} catch (error) {
		dispatch({
			type: "deleteTaskFailure",
			payload: error.response.data.message,
		});
	}
};

export const updateProfile = (formData) => async (dispatch) => {
	try {
		dispatch({ type: "updateProfileRequest" });

		const { data } = await axios.put(`${serverUrl}/updateprofile`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		dispatch({ type: "updateProfileSuccess", payload: data.message });
	} catch (error) {
		dispatch({
			type: "updateProfileFailure",
			payload: error.response.data.message,
		});
	}
};

export const logout = () => async (dispatch) => {
	try {
		dispatch({ type: "logoutRequest" });

		await axios.get(`${serverUrl}/logout`);
		dispatch({ type: "logoutSuccess" });
	} catch (error) {
		dispatch({
			type: "logoutFailure",
			payload: error.response.data.message,
		});
	}
};

export const register = (formData) => async (dispatch) => {
	try {
		dispatch({ type: "registerRequest" });

		const { data } = await axios.post(`${serverUrl}/register`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		dispatch({ type: "registerSuccess", payload: data });
	} catch (error) {
		dispatch({
			type: "registerFailure",
			payload: error.response.data.message,
		});
	}
};

export const updatePassword =
	(oldPassword, newPassword) => async (dispatch) => {
		try {
			dispatch({ type: "updatePasswordRequest" });

			const { data } = await axios.put(
				`${serverUrl}/updatepassword`,
				{ oldPassword, newPassword },
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			dispatch({ type: "updatePasswordSuccess", payload: data.message });
		} catch (error) {
			dispatch({
				type: "updatePasswordFailure",
				payload: error.response.data.message,
			});
		}
	};

export const verify = (otp) => async (dispatch) => {
	try {
		dispatch({ type: "verificationRequest" });

		const { data } = await axios.post(
			`${serverUrl}/verify`,
			{ otp },
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		dispatch({ type: "verificationSuccess", payload: data.message });
	} catch (error) {
		dispatch({
			type: "verificationFailure",
			payload: error.response.data.message,
		});
	}
};

export const forgetPassword = (email) => async (dispatch) => {
	try {
		dispatch({ type: "forgetPasswordRequest" });

		const { data } = await axios.post(
			`${serverUrl}/forgetpassword`,
			{ email },
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		dispatch({ type: "forgetPasswordSuccess", payload: data.message });
	} catch (error) {
		dispatch({
			type: "forgetPasswordFailure",
			payload: error.response.data.message,
		});
	}
};

export const resetPassword = (otp, newPassword) => async (dispatch) => {
	try {
		dispatch({ type: "resetPasswordRequest" });

		const { data } = await axios.put(
			`${serverUrl}/resetpassword`,
			{ otp, newPassword },
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		dispatch({ type: "resetPasswordSuccess", payload: data.message });
	} catch (error) {
		dispatch({
			type: "resetPasswordFailure",
			payload: error.response.data.message,
		});
	}
};

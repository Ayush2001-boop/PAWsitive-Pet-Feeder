"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messageReducer = exports.authReducer = void 0;

var _toolkit = require("@reduxjs/toolkit");

var authReducer = (0, _toolkit.createReducer)({}, {
  loginRequest: function loginRequest(state) {
    state.loading = true;
  },
  loginSuccess: function loginSuccess(state, action) {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload.user;
    state.message = action.payload.message;
  },
  loginFailure: function loginFailure(state, action) {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },
  registerRequest: function registerRequest(state) {
    state.loading = true;
  },
  registerSuccess: function registerSuccess(state, action) {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload.user;
    state.message = action.payload.message;
  },
  registerFailure: function registerFailure(state, action) {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },
  loadUserRequest: function loadUserRequest(state) {
    state.loading = true;
  },
  loadUserSuccess: function loadUserSuccess(state, action) {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload.user;
  },
  loadUserFailure: function loadUserFailure(state, action) {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },
  logoutRequest: function logoutRequest(state) {
    state.loading = true;
  },
  logoutSuccess: function logoutSuccess(state) {
    state.loading = false;
    state.isAuthenticated = false;
    state.user = null;
  },
  logoutFailure: function logoutFailure(state, action) {
    state.loading = false;
    state.isAuthenticated = true;
    state.error = action.payload;
  },
  verificationRequest: function verificationRequest(state) {
    state.loading = true;
  },
  verificationSuccess: function verificationSuccess(state, action) {
    state.loading = false;
    state.message = action.payload;
  },
  verificationFailure: function verificationFailure(state, action) {
    state.loading = false;
    state.error = action.payload;
  },
  clearError: function clearError(state) {
    state.error = null;
  },
  clearMessage: function clearMessage(state) {
    state.message = null;
  }
});
exports.authReducer = authReducer;
var messageReducer = (0, _toolkit.createReducer)({}, {
  /* addTaskRequest: (state) => {
      state.loading = true;
    },
    addTaskSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addTaskFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }, */

  /* addPetRequest: (state) => {
      state.loading = true;
    },
    addPetSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addPetFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }, */

  /* updateTaskRequest: (state) => {
      state.loading = true;
    },
    updateTaskSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateTaskFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }, */
  updatePetRequest: function updatePetRequest(state) {
    state.loading = true;
  },
  updatePetSuccess: function updatePetSuccess(state, action) {
    state.loading = false;
    state.message = action.payload;
  },
  updatePetFailure: function updatePetFailure(state, action) {
    state.loading = false;
    state.error = action.payload;
  },
  sendPetsRequest: function sendPetsRequest(state) {
    state.loading = true;
  },
  sendPetsSuccess: function sendPetsSuccess(state, action) {
    state.loading = false;
    state.message = action.payload;
  },
  sendPetsFailure: function sendPetsFailure(state, action) {
    state.loading = false;
    state.error = action.payload;
  },
  updateIpRequest: function updateIpRequest(state) {
    state.loading = true;
  },
  updateIpSuccess: function updateIpSuccess(state, action) {
    state.loading = false;
    state.message = action.payload;
  },
  updateIpFailure: function updateIpFailure(state, action) {
    state.loading = false;
    state.error = action.payload;
  },

  /* deleteTaskRequest: (state) => {
  	state.loading = true;
  },
  deleteTaskSuccess: (state, action) => {
  	state.loading = false;
  	state.message = action.payload;
  },
  deleteTaskFailure: (state, action) => {
  	state.loading = false;
  	state.error = action.payload;
  }, */
  removePetRequest: function removePetRequest(state) {
    state.loading = true;
  },
  removePetSuccess: function removePetSuccess(state, action) {
    state.loading = false;
    state.message = action.payload;
  },
  removePetFailure: function removePetFailure(state, action) {
    state.loading = false;
    state.error = action.payload;
  },
  updateProfileRequest: function updateProfileRequest(state) {
    state.loading = true;
  },
  updateProfileSuccess: function updateProfileSuccess(state, action) {
    state.loading = false;
    state.message = action.payload;
  },
  updateProfileFailure: function updateProfileFailure(state, action) {
    state.loading = false;
    state.error = action.payload;
  },
  updatePasswordRequest: function updatePasswordRequest(state) {
    state.loading = true;
  },
  updatePasswordSuccess: function updatePasswordSuccess(state, action) {
    state.loading = false;
    state.message = action.payload;
  },
  updatePasswordFailure: function updatePasswordFailure(state, action) {
    state.loading = false;
    state.error = action.payload;
  },
  forgetPasswordRequest: function forgetPasswordRequest(state) {
    state.loading = true;
  },
  forgetPasswordSuccess: function forgetPasswordSuccess(state, action) {
    state.loading = false;
    state.message = action.payload;
  },
  forgetPasswordFailure: function forgetPasswordFailure(state, action) {
    state.loading = false;
    state.error = action.payload;
  },
  resetPasswordRequest: function resetPasswordRequest(state) {
    state.loading = true;
  },
  resetPasswordSuccess: function resetPasswordSuccess(state, action) {
    state.loading = false;
    state.message = action.payload;
  },
  resetPasswordFailure: function resetPasswordFailure(state, action) {
    state.loading = false;
    state.error = action.payload;
  },
  clearError: function clearError(state) {
    state.error = null;
  },
  clearMessage: function clearMessage(state) {
    state.message = null;
  }
});
exports.messageReducer = messageReducer;
//# sourceMappingURL=reducer.dev.js.map

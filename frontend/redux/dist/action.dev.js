"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPassword = exports.forgetPassword = exports.verify = exports.updatePassword = exports.register = exports.logout = exports.updateProfile = exports.deleteTask = exports.updateTask = exports.addTask = exports.removePet = exports.sendPets = exports.updatePet = exports.updateIp = exports.loadUser = exports.login = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var serverUrl = "https://meow-meow-feeder.herokuapp.com/api/v1";

var login = function login(email, password) {
  return function _callee(dispatch) {
    var _ref, data;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            dispatch({
              type: "loginRequest"
            });
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post("".concat(serverUrl, "/login"), {
              email: email,
              password: password
            }, {
              headers: {
                "Content-Type": "application/json"
              }
            }));

          case 4:
            _ref = _context.sent;
            data = _ref.data;
            console.log(data);
            dispatch({
              type: "loginSuccess",
              payload: data
            });
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: "loginFailure",
              payload: _context.t0.response.data.message
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 10]]);
  };
};

exports.login = login;

var loadUser = function loadUser() {
  return function _callee2(dispatch) {
    var _ref2, data;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            dispatch({
              type: "loadUserRequest"
            });
            _context2.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("".concat(serverUrl, "/me")));

          case 4:
            _ref2 = _context2.sent;
            data = _ref2.data;
            dispatch({
              type: "loadUserSuccess",
              payload: data
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            dispatch({
              type: "loadUserFailure",
              payload: _context2.t0.response.data.message
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.loadUser = loadUser;

var updateIp = function updateIp(ip) {
  return function _callee3(dispatch) {
    var _ref3, data;

    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            dispatch({
              type: "updateIpRequest"
            });
            _context3.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post("".concat(serverUrl, "/updateIp"), {
              ip_address: ip
            }, {
              header: {
                "Content-Type": "application/json"
              }
            }));

          case 4:
            _ref3 = _context3.sent;
            data = _ref3.data;
            dispatch({
              type: "updateIpSuccess",
              payload: data.message
            });
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            dispatch({
              type: "updateIpRequest",
              payload: _context3.t0.response.data.message
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.updateIp = updateIp;

var updatePet = function updatePet(formData) {
  return function _callee4(dispatch) {
    var petId, name, hour, minute, cup, _ref4, data;

    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            dispatch({
              type: "updatePetRequest"
            });
            petId = formData.petId, name = formData.name, hour = formData.hour, minute = formData.minute, cup = formData.cup;
            _context4.next = 5;
            return regeneratorRuntime.awrap(_axios["default"].put("".concat(serverUrl, "/Pet/").concat(petId), {
              petId: petId,
              name: name,
              hour: hour,
              minute: minute,
              cup: cup
            }, {
              headers: {
                "Content-Type": "application/json"
              }
            }));

          case 5:
            _ref4 = _context4.sent;
            data = _ref4.data;
            dispatch({
              type: "updatePetSuccess",
              payload: data.message
            });
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            dispatch({
              type: "updatePetFailure",
              payload: _context4.t0.response.data.message
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 10]]);
  };
};

exports.updatePet = updatePet;

var sendPets = function sendPets(ip, pets) {
  return function _callee5(dispatch) {
    var _ref5, data;

    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            dispatch({
              type: "sendPetsRequest"
            });
            console.log(pets);
            console.log("Making api call to ".concat(ip, " with ").concat(pets));
            console.log("Send Pet request");
            _context5.next = 7;
            return regeneratorRuntime.awrap(_axios["default"].post("http://".concat(ip, ":3000/runPython"), {
              pets: pets
            }, {
              headers: {
                "Content-type": "application/json"
              }
            }));

          case 7:
            _ref5 = _context5.sent;
            data = _ref5.data;
            console.log(data);
            dispatch({
              type: "sendPetsSuccess",
              payload: data.message
            });
            _context5.next = 16;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            dispatch({
              type: "sendPetsFailure",
              payload: _context5.t0.response.data.message
            });

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 13]]);
  };
};

exports.sendPets = sendPets;

var removePet = function removePet(petId) {
  return function _callee6(dispatch) {
    var _ref6, data;

    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            dispatch({
              type: "removePetRequest"
            });
            _context6.next = 4;
            return regeneratorRuntime.awrap(_axios["default"]["delete"]("".concat(serverUrl, "/Pet/").concat(petId)));

          case 4:
            _ref6 = _context6.sent;
            data = _ref6.data;
            dispatch({
              type: "removePetSuccess",
              payload: data.message
            });
            _context6.next = 12;
            break;

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](0);
            dispatch({
              type: "removePetFailure",
              payload: _context6.t0.response.data.message
            });

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.removePet = removePet;

var addTask = function addTask(title, description) {
  return function _callee7(dispatch) {
    var _ref7, data;

    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            dispatch({
              type: "addTaskRequest"
            });
            _context7.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post("".concat(serverUrl, "/newtask"), {
              title: title,
              description: description
            }, {
              headers: {
                "Content-Type": "application/json"
              }
            }));

          case 4:
            _ref7 = _context7.sent;
            data = _ref7.data;
            dispatch({
              type: "addTaskSuccess",
              payload: data.message
            });
            _context7.next = 12;
            break;

          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](0);
            dispatch({
              type: "addTaskFailure",
              payload: _context7.t0.response.data.message
            });

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.addTask = addTask;

var updateTask = function updateTask(taskId) {
  return function _callee8(dispatch) {
    var _ref8, data;

    return regeneratorRuntime.async(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            dispatch({
              type: "updateTaskRequest"
            });
            _context8.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("".concat(serverUrl, "/task/").concat(taskId)));

          case 4:
            _ref8 = _context8.sent;
            data = _ref8.data;
            dispatch({
              type: "updateTaskSuccess",
              payload: data.message
            });
            _context8.next = 12;
            break;

          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8["catch"](0);
            dispatch({
              type: "updateTaskFailure",
              payload: _context8.t0.response.data.message
            });

          case 12:
          case "end":
            return _context8.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.updateTask = updateTask;

var deleteTask = function deleteTask(taskId) {
  return function _callee9(dispatch) {
    var _ref9, data;

    return regeneratorRuntime.async(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            dispatch({
              type: "deleteTaskRequest"
            });
            _context9.next = 4;
            return regeneratorRuntime.awrap(_axios["default"]["delete"]("".concat(serverUrl, "/task/").concat(taskId)));

          case 4:
            _ref9 = _context9.sent;
            data = _ref9.data;
            dispatch({
              type: "deleteTaskSuccess",
              payload: data.message
            });
            _context9.next = 12;
            break;

          case 9:
            _context9.prev = 9;
            _context9.t0 = _context9["catch"](0);
            dispatch({
              type: "deleteTaskFailure",
              payload: _context9.t0.response.data.message
            });

          case 12:
          case "end":
            return _context9.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.deleteTask = deleteTask;

var updateProfile = function updateProfile(formData) {
  return function _callee10(dispatch) {
    var _ref10, data;

    return regeneratorRuntime.async(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            dispatch({
              type: "updateProfileRequest"
            });
            _context10.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].put("".concat(serverUrl, "/updateprofile"), formData, {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }));

          case 4:
            _ref10 = _context10.sent;
            data = _ref10.data;
            dispatch({
              type: "updateProfileSuccess",
              payload: data.message
            });
            _context10.next = 12;
            break;

          case 9:
            _context10.prev = 9;
            _context10.t0 = _context10["catch"](0);
            dispatch({
              type: "updateProfileFailure",
              payload: _context10.t0.response.data.message
            });

          case 12:
          case "end":
            return _context10.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.updateProfile = updateProfile;

var logout = function logout() {
  return function _callee11(dispatch) {
    return regeneratorRuntime.async(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            dispatch({
              type: "logoutRequest"
            });
            _context11.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("".concat(serverUrl, "/logout")));

          case 4:
            dispatch({
              type: "logoutSuccess"
            });
            _context11.next = 10;
            break;

          case 7:
            _context11.prev = 7;
            _context11.t0 = _context11["catch"](0);
            dispatch({
              type: "logoutFailure",
              payload: _context11.t0.response.data.message
            });

          case 10:
          case "end":
            return _context11.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.logout = logout;

var register = function register(formData) {
  return function _callee12(dispatch) {
    var _ref11, data;

    return regeneratorRuntime.async(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            dispatch({
              type: "registerRequest"
            });
            _context12.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post("".concat(serverUrl, "/register"), formData, {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }));

          case 4:
            _ref11 = _context12.sent;
            data = _ref11.data;
            dispatch({
              type: "registerSuccess",
              payload: data
            });
            _context12.next = 12;
            break;

          case 9:
            _context12.prev = 9;
            _context12.t0 = _context12["catch"](0);
            dispatch({
              type: "registerFailure",
              payload: _context12.t0.response.data.message
            });

          case 12:
          case "end":
            return _context12.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.register = register;

var updatePassword = function updatePassword(oldPassword, newPassword) {
  return function _callee13(dispatch) {
    var _ref12, data;

    return regeneratorRuntime.async(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            dispatch({
              type: "updatePasswordRequest"
            });
            _context13.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].put("".concat(serverUrl, "/updatepassword"), {
              oldPassword: oldPassword,
              newPassword: newPassword
            }, {
              headers: {
                "Content-Type": "application/json"
              }
            }));

          case 4:
            _ref12 = _context13.sent;
            data = _ref12.data;
            dispatch({
              type: "updatePasswordSuccess",
              payload: data.message
            });
            _context13.next = 12;
            break;

          case 9:
            _context13.prev = 9;
            _context13.t0 = _context13["catch"](0);
            dispatch({
              type: "updatePasswordFailure",
              payload: _context13.t0.response.data.message
            });

          case 12:
          case "end":
            return _context13.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.updatePassword = updatePassword;

var verify = function verify(otp) {
  return function _callee14(dispatch) {
    var _ref13, data;

    return regeneratorRuntime.async(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            dispatch({
              type: "verificationRequest"
            });
            _context14.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post("".concat(serverUrl, "/verify"), {
              otp: otp
            }, {
              headers: {
                "Content-Type": "application/json"
              }
            }));

          case 4:
            _ref13 = _context14.sent;
            data = _ref13.data;
            dispatch({
              type: "verificationSuccess",
              payload: data.message
            });
            _context14.next = 12;
            break;

          case 9:
            _context14.prev = 9;
            _context14.t0 = _context14["catch"](0);
            dispatch({
              type: "verificationFailure",
              payload: _context14.t0.response.data.message
            });

          case 12:
          case "end":
            return _context14.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.verify = verify;

var forgetPassword = function forgetPassword(email) {
  return function _callee15(dispatch) {
    var _ref14, data;

    return regeneratorRuntime.async(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            dispatch({
              type: "forgetPasswordRequest"
            });
            _context15.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post("".concat(serverUrl, "/forgetpassword"), {
              email: email
            }, {
              headers: {
                "Content-Type": "application/json"
              }
            }));

          case 4:
            _ref14 = _context15.sent;
            data = _ref14.data;
            dispatch({
              type: "forgetPasswordSuccess",
              payload: data.message
            });
            _context15.next = 12;
            break;

          case 9:
            _context15.prev = 9;
            _context15.t0 = _context15["catch"](0);
            dispatch({
              type: "forgetPasswordFailure",
              payload: _context15.t0.response.data.message
            });

          case 12:
          case "end":
            return _context15.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.forgetPassword = forgetPassword;

var resetPassword = function resetPassword(otp, newPassword) {
  return function _callee16(dispatch) {
    var _ref15, data;

    return regeneratorRuntime.async(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            dispatch({
              type: "resetPasswordRequest"
            });
            _context16.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].put("".concat(serverUrl, "/resetpassword"), {
              otp: otp,
              newPassword: newPassword
            }, {
              headers: {
                "Content-Type": "application/json"
              }
            }));

          case 4:
            _ref15 = _context16.sent;
            data = _ref15.data;
            dispatch({
              type: "resetPasswordSuccess",
              payload: data.message
            });
            _context16.next = 12;
            break;

          case 9:
            _context16.prev = 9;
            _context16.t0 = _context16["catch"](0);
            dispatch({
              type: "resetPasswordFailure",
              payload: _context16.t0.response.data.message
            });

          case 12:
          case "end":
            return _context16.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.resetPassword = resetPassword;
//# sourceMappingURL=action.dev.js.map

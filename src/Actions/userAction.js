import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//login Auth
export const AuthAction = (email, password) => async (dispatch) => {
  try {
    const { data } = await Axios.post(
      "https://defigram-app.herokuapp.com/adminAuthentication/api/adminAuth",
      { email, password }
    );
    dispatch({ type: "SUCCESS", payload: data });
    console.log("data ", data);
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    toast.error("Invalid email or password");
    dispatch({ type: "ERROR", payload: "Invalid email or password" });
  }
};

export const Logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");

  dispatch({ type: "SIGN_OUT" });
};

//getAllUsers
export const getAllUsers = () => async (dispatch, getState) => {
  const {
    userSignIn: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(
      "https://defigram-app.herokuapp.com/admin/api/getAllRegisteredUsers",
      {
        headers: { Authorization: `${userInfo.data}` },
      }
    );

    dispatch({ type: "FETCH_ALL_USERS_SUCCESS", payload: data.data });

    localStorage.setItem("allUsers", JSON.stringify(data.data));
  } catch (error) {
    dispatch({
      type: "ERROR_FETCH_USERS",
      payload: "All Users Data are not coming",
    });
  }
};
// //block && unBlock User
// export const blockUnBlockUsers = (user_id) => async (getState) => {
//   const {
//     userSignIn: { userInfo },
//   } = getState();
//   try {
//     const { data } = await Axios.get(
//       "https://defigram-app.herokuapp.com/admin/api/blockUser",
//       { user_id: user_id },
//       {
//         headers: { Authorization: `${userInfo.data}` },
//       }
//     );
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

import { message } from "antd";

const initialState = {
  userDetails: null,
};
const Reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "USER_DETAILS_SAVE":
      message.success("Form submitted successfully!");
      return {
        userDetails:action.payload
      };

    default:
      return state;
  }
};

export default Reducer;

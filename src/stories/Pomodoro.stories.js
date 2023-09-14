import Pomodoro from "../components/pomodoro";

//👇 This default export determines where your story goes in the story list
export default {
  component: Pomodoro,
};

export const Start = {
  args: {
    //👇 The args you need here will depend on your component
    status: "START",
  },
};
export const Pause = {
  args: {
    //👇 The args you need here will depend on your component
    status: "PAUSE",
  },
};
export const Reset = {
  args: {
    //👇 The args you need here will depend on your component
    status: "RESET",
  },
};

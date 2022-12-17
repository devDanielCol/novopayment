import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IThemeControls } from "../../types/reducers";
import { IThemeModes } from "../../types/theme";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../util/helpers/storagEncrypt";

const initialState: IThemeControls = {
  theme: "light",
};

export const controllerTheme = createSlice({
  name: "theme-controlls",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<IThemeModes>) => {
      state.theme = action.payload;
      setLocalStorage("theme", state.theme);
    },
    setCurrentTheme(state) {
      const storage = getLocalStorage<IThemeModes>("theme");
      state.theme = storage ? storage : initialState.theme;
    },
  },
});

export const { changeTheme, setCurrentTheme } = controllerTheme.actions;

export default controllerTheme.reducer;

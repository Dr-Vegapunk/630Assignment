import { createSlice } from '@reduxjs/toolkit'


export const boxSlice = createSlice({
  name: 'box',
  initialState: {
    width:40,
    height:40,
    margin:20,
    padding:20,
    borderRadius:0,
    backgroundColor:'orange'
  },
  reducers: {
    changeToCircle: (state, action) => {
        state.height=state.width

      state.borderRadius='50%'
    },
    changeToNormal:(state, action)=>{
        state.borderRadius=0;
    },
    moveMarginToLeft: (state) => {
      state.margin++;
    },
    decreaseMargin:(state)=>{
      state.margin--;
    },
    backgroundColorChanger:(state, action)=>{
      state.backgroundColor=action.payload;

    }
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { changeToCircle, moveMarginToLeft ,changeToNormal,backgroundColorChanger,decreaseMargin} = boxSlice.actions

export default boxSlice.reducer
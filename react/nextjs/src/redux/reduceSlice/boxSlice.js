import { createSlice } from '@reduxjs/toolkit'


export const boxSlice = createSlice({
  name: 'box',
  initialState: {
    width:40,
    height:40,
    margin:20,
    padding:20,
    borderRadius:0,
    backgroundColor:'orange',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    marginBottom: 30,
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

    },
    moveRight:(state,action)=>{
      state.marginLeft +=20;
    },
    moveLeft:(state,action)=>{
      state.marginLeft = state.marginLeft-20;
    },
    moveUp:(state,action)=>{
      state.marginTop +=20;
    },
    moveDown:(state,action)=>{
      state.marginTop -=20;
    },

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { changeToCircle, moveMarginToLeft ,changeToNormal,backgroundColorChanger,decreaseMargin,moveDown,moveLeft,moveRight,moveUp} = boxSlice.actions

export default boxSlice.reducer
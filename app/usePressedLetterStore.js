import { create } from 'zustand';

const usePressedLetterStore = create((set) => ({
  values: [],
  addToValues: (newValue) =>
    set((state) => ({ values: [...state.values, newValue] })),
    slicedState: ()=>set( (state) =>sliceFunction(state)),
    modifiedState:()=>set( (slicedState) =>addBackFunction(slicedState)), 
    removeAllValues: () => set({ values: [] }), // New function to remove all values 
}));

const removeAndSaveLastValue = () => {
  let savedValue = null;
  const sliceFunction = (state) => {
    savedValue = state.values[state.values.length - 1];
    return { values: state.values.slice(0, -1) };
  };

  const addBackFunction = (state) => {
    return { values: [...state.values, savedValue] };
  };

  return [sliceFunction, addBackFunction];
};

const [sliceFunction, addBackFunction] = removeAndSaveLastValue();
export default usePressedLetterStore;

import {create} from 'zustand';

const useTimerStore = create((set) =>({
    playTimer : true , 
    updateTimer : async () =>{
        set({playTimer : false})
    },
    resetPlayTimer : async () => {
        set({playTimer:true})
    }
}))

export default useTimerStore
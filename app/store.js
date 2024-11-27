import {create} from 'zustand';
import {easyWordList} from '../easyWordList'
import {hardWordList} from '../nineLetterWords'

const easyWords = easyWordList

const useWordStore = create((set) => ({
     // Initial state is an empty array
     easyWordStore:easyWords,
     hardWordStore: hardWordList,
     setEasyWords:(newWords) =>set({eayWordStore:newWords}),
   
     setWords: (newWords) => set({ words: newWords }),
   }));
   
   export default useWordStore;
   
import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useScoreStore = create((set) => ({
  score: 0,

  // Function to update the score
  updateScore: async (newScore) => {
    set({ score: newScore });
    // Store the score in AsyncStorage for persistence
    try {
      await AsyncStorage.setItem('gameScore', newScore.toString());
    } catch (error) {
      console.error('Error storing score in AsyncStorage: ', error);
    }
  },

  // Function to retrieve the score from AsyncStorage
  getScoreFromStorage: async () => {
    try {
      const storedScore = await AsyncStorage.getItem('gameScore');
      if (storedScore !== null) {
        set({ score: parseInt(storedScore, 10) });
      }
    } catch (error) {
      console.error('Error retrieving score from AsyncStorage: ', error);
    }
  },

  // Function to reset the score
  resetScore: async () => {
    set({ score: 0 });
    // Clear the score from AsyncStorage
    try {
      await AsyncStorage.removeItem('gameScore');
    } catch (error) {
      console.error('Error clearing score from AsyncStorage: ', error);
    }
  },
}));

export default useScoreStore;

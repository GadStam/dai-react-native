import spoonClient from './spoonClient';
import AsyncStorage from '@react-native-async-storage/async-storage';




export const searchRecipe = async (comida) => {
    console.log(comida)
    return spoonClient
    .get(`recipes/complexSearch?apiKey=5fbfaca6af9949e48de98190593f70f9&query=${comida}`, {
      
    })
    .then(async(res) => {
        const info=res.data.results
        
        return info
    })
    .catch((e) => {
      console.log(`register error`, e.response);
      throw "error" //propagar error
    });
};

export const getReciepesInformation = async (userState) => {
    console.log(userState)
    return alkemyClient
      .post(``, {
        ...userState
      })
      .then(async(res) => {
        
      })
      .catch((e) => {
        console.log(`register error`, e.response);
        throw "error" //propagar error
      });
  };
  

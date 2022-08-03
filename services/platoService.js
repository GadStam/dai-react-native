import spoonClient from './spoonClient';
import AsyncStorage from '@react-native-async-storage/async-storage';




export const searchRecipe = async (useState) => {
    console.log(useState.plato)
    return spoonClient
    .get(`recipes/complexSearch?apiKey=5fbfaca6af9949e48de98190593f70f9&query=${useState.plato}`, {
      
    })
    .then(async(res) => {
        const info=res.data.results
        console.log(info)
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
  

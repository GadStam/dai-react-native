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

export const getReciepesInformation = async (id) => {
    console.log(id)
    return spoonClient
      .get(`recipes/${id}/information?apiKey=5fbfaca6af9949e48de98190593f70f9`, {
        
      })
      .then(async(res) => {
        
        const info=res.data
        
        return info
      })
      .catch((e) => {
        console.log(`register error`, e.response);
        throw "error" //propagar error
      });
  };
  

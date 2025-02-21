import axios from "axios";

export const useLocation = () => {

    async function getLocations()  {
    
      try{
      const resp = await axios.get('/locations');
      const locations = resp.data;
      return locations .data
      console.log(locations.data)

  

      }catch(error){
        return null
      }
    }

  
    return {
      getLocations,
    };


};
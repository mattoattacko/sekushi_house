import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

// Function fetches data from the API
// We get a 'response' about all the properties we want to fetch. Eg: rental/buy
// The response we turn into destructured data 
//'options' (headers:..) is a new empty object 
// the 'return data' gets sent to our Home component
export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '56760e1588msha1a04be909bcd6cp172ba4jsnecfa15b09cd3'
    }
  })
  return data;
}
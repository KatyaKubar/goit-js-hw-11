import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '42372346-6df3db87eb4ada5723d622fbb';

export async function fetchPhoto(q, page, perPage) {
  try {
    const url = `${BASE_URL}/?key=${API_KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

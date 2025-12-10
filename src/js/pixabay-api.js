// import axios from 'axios';

// ============================================

// export async function getImagesByQuery(query, page = 1) {
//     const API_KEY = import.meta.env.VITE_PIXABAY_KEY;
//       console.log('API KEY:', API_KEY);
//   const BASE_URL = 'https://pixabay.com/api/';

//   const params = {
//     key: API_KEY,
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     page: page,
//     per_page: 15,
//   };

//   const res = await axios.get(BASE_URL, { params });
//   return res.data;
// }

// ================================================

// const API_KEY = '53335895-4d104a908de65f21952c0d536';
// const BASE_URL = 'https://pixabay.com/api/';

// export function getImagesByQuery(query) {
//   return axios
//     .get(BASE_URL, {
//       params: {
//         key: API_KEY,
//         q: query,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//       },
//     })
//     .then(res => {
//       return res.data;
//     });
// }

// =========================================

import axios from 'axios';

export async function getImagesByQuery(query, page = 1) {
  const API_KEY = '53335895-4d104a908de65f21952c0d536';
  const BASE_URL = 'https://pixabay.com/api/';

  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,      // важливо для пагінації
    per_page: 15,
  };

  try {
    const res = await axios.get(BASE_URL, { params });
    return res.data;
  } catch (error) {
    console.error('Помилка при запиті до Pixabay:', error);
    return { hits: [], totalHits: 0 };
  }
}

// =======================================

// const API_KEY = import.meta.env.VITE_PIXABAY_KEY;

// export async function getImagesByQuery(query, page = 1) {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const params = {
//     key: API_KEY,
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     page: page,
//     per_page: 15,
//   };

//   try {
//     const res = await axios.get(BASE_URL, { params });
//     return res.data;
//   } catch (error) {
//     console.error(error);
//     return { hits: [], totalHits: 0 };
//   }
// }

// ============================================

// import axios from 'axios';

// const API_KEY = import.meta.env.VITE_PIXABAY_KEY;
// const BASE_URL = 'https://pixabay.com/api/';

// export async function getImagesByQuery(query, page = 1) {
//   const params = {
//     key: API_KEY,
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     page: page,
//     per_page: 15,
//   };

//   try {
//     const res = await axios.get(BASE_URL, { params });
//     return res.data;
//   } catch (error) {
//     console.error('Помилка запиту до Pixabay:', error);
//     return { hits: [], totalHits: 0 };
//   }
// }


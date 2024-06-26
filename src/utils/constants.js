export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const PROFILE_IMAGE =
  "https://media.licdn.com/dms/image/C4E03AQEEE_e9kU98Rg/profile-displayphoto-shrink_800_800/0/1664201603140?e=2147483647&v=beta&t=-anzvdkvWAMz3P-FYVcyMiTfGlounzF89DtwBpGgyms";

export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
export const MOVIE_POSTER_URL = "https://image.tmdb.org/t/p/w500";

export const language = [
  { identifier: "english", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "marathi", name: "Marathi" },
];

export const GPT_API_KEY = process.env.REACT_APP_GPT_KEY;

import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      // Does this cookie string begin with the name we want?
      if (cookie.startsWith(name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

// Set the default header for Axios
axios.defaults.headers.common['X-CSRFToken'] = getCookie('csrftoken');

export default axios;
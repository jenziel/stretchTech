const API_BASE = 'https://developer.nps.gov/api/v1/';
const API_KEY = '88uiVoPed9zuR3daHPnsrPxaYV0ZWsiqP66VvpSc';

// Fetch all parks
export function getParksData() {
  return fetch(`${API_BASE}parks?limit=500&api_key=${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status.toString());
      }
      return response.json();
    });
}

// Fetch by parkCode
export function getIndividualPark(parkCode) {
  return fetch(`${API_BASE}parks?parkCode=${parkCode}&api_key=${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status.toString());
      }
      return response.json();
    });
}

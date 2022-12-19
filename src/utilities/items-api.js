import sendRequest from './send-request';
const BASE_URL = '/api/items';

// Refactored code below
export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function createReview(reviewData, itemId) {
  console.log('hi');
  return sendRequest(`${BASE_URL}/${itemId}/reviews`, 'POST', reviewData);
}

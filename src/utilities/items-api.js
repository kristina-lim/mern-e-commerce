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
  return sendRequest(`${BASE_URL}/${itemId}/reviews`, 'POST', reviewData);
}

export function updateReview(reviewFormData, itemId, reviewId) {
  return sendRequest(`${BASE_URL}/${itemId}/reviews/${reviewId}`, 'PUT', reviewFormData);
}

export function deleteReview(itemId, reviewId) {
  return sendRequest(`${BASE_URL}/${itemId}/reviews/${reviewId}`, 'DELETE');
}

import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer HoMNd3fUv8QEVfQgkMNqmI19l4zOfzaUbZe8x2GrRkNzJJcBVszmEgIkmUX5P1EEGL5ZQ7_3AFR9LzFSvvFj0vMzHISR1rRprnd25siG7Xw7sWbg3HdepoCkCnzaX3Yx'
    }
});
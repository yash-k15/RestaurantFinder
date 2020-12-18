import {useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [ error, setError ] = useState('');


    const searchApi = async term => {
        try {
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term,
                    location: 'seattle'
                }
            });
            setResults(response.data.businesses);
        } catch (err){
            setError('Something went wrong! oops');
        }
    }

    useEffect (() => {
        searchApi('american');
    }, [])

    return [searchApi, results, error];
}
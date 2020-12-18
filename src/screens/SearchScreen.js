import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../Hooks/useResults';
import ResultsList from '../Components/ResultsList';

const SearchScreen = () => {
    const [ term, setTerm ] = useState('');
    const [searchApi, results, error] = useResults();

    const filterByPrice = (price) => {
        return results.filter( result => {
            return result.price === price
        })
    }

    return (
        <>
            <SearchBar 
                term = {term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {error !== '' ? <Text>{error}</Text> : null }
            
            <ScrollView>
                <ResultsList 
                    results={filterByPrice('$')}
                    title="Cheap"
                />
                <ResultsList 
                    results={filterByPrice('$$')}
                    title="Medium"
                />
                <ResultsList 
                    results={filterByPrice('$$$')}
                    title="Costly"
                />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    
});

export default SearchScreen;
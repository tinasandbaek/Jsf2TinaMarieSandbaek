import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/api";
import CharacterItem from "./CharacterItem";
import Search from "./Search";

function List() {
    const [results, setResults] = useState([]); 
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(function() {
        fetch(BASE_URL)
            .then(function(response) {
                return response.json(); 
            })
            .then(function(json) {
                console.dir(json.results);
                setResults(json.results);
                setFilteredResults(json.results);
            })
            .catch(function(error) {
                console.log(error);
            });
    }, []);

    function handleSearch(inputValue) {
        const lowerCaseInput = inputValue.toLowerCase();
        const filteredArray = results.filter(function(result) {
            const lowercaseName = result.name.toLowerCase();

            if (lowercaseName.startsWith(lowerCaseInput)) {
                return true;
            } else {
                return false;
            }
        });

        setFilteredResults(filteredArray);
    }

    function displayResults() {
        if (filteredResults.length === 0) {
            return <div>No results</div>;
        }

        return filteredResults.map(function(result) {
            const href = "character/" + result.id;

            return (
                <div className="card">
                    <h1 key={result.name}>{result.name}</h1>
                    <img src={result.image} alt={result.name} />
                    <CharacterItem rating={result.rating} released={result.released} />
                    <a href={href}>Details</a>
                </div>
            );
        });
    }

    return (
        <div>
            <Search doSearch={handleSearch} />

            {displayResults()}
        </div>
    );
}

export default List;

import React from "react";
import PropTypes from "prop-types";


function CharacterItem(props) {
    return (
        <div>
            <p>
                <b>Rating: {props.rating}</b>
            </p>
            <p>
                <b>Released: {props.released}</b>
            </p>
        </div>
    );
}
CharacterItem.propTypes = {
    rating: PropTypes.string.isRequired,
    released: PropTypes.string.isRequired
};

export default CharacterItem;
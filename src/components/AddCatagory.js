import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCatagory = ({ setcategories }) => {
    const [inputValue, setinputValue] = useState('');

    //function update input text
    const handleText = ({ target: { value } }) => {
        setinputValue(value);
    };

    //function update input value in the list
    const handleSubmit = (e) => {
        e.preventDefault();
        setcategories((cat) => [inputValue,...cat]);
        setinputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a new category</h2>
            <input type='text' required value={inputValue} onChange={handleText} />
        </form>
    );
};

AddCatagory.propTypes = {
    setcategories: PropTypes.func.isRequired,
};

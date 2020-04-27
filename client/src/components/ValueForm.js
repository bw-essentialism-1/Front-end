import React, { useState } from 'react';
import { addValue } from '../actions';
import { connect } from 'react-redux';

const ValueForm = props => {
    const newState = {value: '', id: ''}

    const [newValues, setNewValues] = useState(newState);

    const handleChanges = e => {
        setNewValues({...newValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addValue(newValues) // addValue is coming from valueActions.js
        setNewValues(newState);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                        name="value"
                        placeholder="Add a value..."
                        value={newValues.value}
                        onChange={handleChanges}
                        />
                
                <button type='submit'>add</button>
            </form>
        </div>
    )
}


const mapStateToProps = state => {
    return{
        values: state.values,
        error: state.error
    }
}

export default connect(mapStateToProps, { addValue })(ValueForm);
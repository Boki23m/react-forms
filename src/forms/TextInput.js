import React from 'react';

const TextInput = props => {

    let formControl = "form-control";
    let validationError = null;

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
        validationError = <p>Please enter a valid value!</p>;
    }

    return (
        <div className="form-group">
            <h5>Name:</h5>
            <input type="text" className={formControl} {...props} />
            {validationError}
        </div>
    );
}

export default TextInput;
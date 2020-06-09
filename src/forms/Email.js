import React from 'react';

const Email = props => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <h5>Email:</h5>
            <input type="email" className={formControl} {...props} />
        </div>
    );
}

export default Email;
import React from 'react';

const Password = props => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <h5>Password:</h5>
            <input type="password" className={formControl} {...props} />
        </div>
    );
}

export default Password;
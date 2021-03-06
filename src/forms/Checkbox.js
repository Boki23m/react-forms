import React from 'react';

const Checkbox = props => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <h5>Are you interested in a position?</h5>
            {props.options.map(option => (
                <div className="form-group" key={option.value}>
                    <label>{option.displayValue}</label>
                    <input type="checkbox" 
                           name={props.name} 
                           value={option.value} 
                           onChange={props.onChange} 
                           className={formControl}
                    />                
                </div>
            ))}

        </div>
    );
}

export default Checkbox;
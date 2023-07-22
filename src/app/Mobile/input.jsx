import PropTypes from 'prop-types';

const Input =(props)=>{
    return(
        <>
      
        <div  >
            <h1>{props.title}</h1>
        <input type={props.type } className={props.className} form={props.form}  />
        </div>
        </>
    );
};

Input.PropTypes={
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    form:PropTypes.string
    
    
};

export default Input;

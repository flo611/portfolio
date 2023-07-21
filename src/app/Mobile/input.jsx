import PropTypes from 'prop-types';

const Input =(props)=>{
    return(
        <>
      
        <div className="bg-cyan-600 rounded-lg  ">
            <h1>Name</h1>
        <input type={props.type } className={props.className}  />
        </div>
        </>
    );
};

Input.PropTypes={
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    
    
};

export default Input;

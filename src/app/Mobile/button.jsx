import PropTypes from 'prop-types';

const Button =(props)=>{
    return(
        <>
        <div className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold  rounded-full px-2 flex flex-row justify-center items-center   " >
            <p > {props.title}</p>
            
        <button type={props.type} className={props.className} />
        </div>
       
        </>
    );
};

Button.PropTypes={
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Button;
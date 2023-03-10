import "./Button.css"

function Button(props){
    return (
        <div className="btn">
            {props.title}
        </div>
    );
}

export default Button;
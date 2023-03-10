


function Title(props){
    let customStyle={
        textAlign:"center",
        color:"blue",
        padding:"2rem",
        fontSize:"1.8rem"
    }
    return (
        <div className="title__container" style={customStyle}>
            <h1>{props.title}</h1>
        </div>
    );
}

export default Title; 
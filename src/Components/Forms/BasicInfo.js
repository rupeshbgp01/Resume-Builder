import "./Forms.css";
import Button from "../Buttons/Button";

function BasicInfo() {
    return (
        <div className="basic__container">
            <div className="basic__top">
                <label htmlFor="basic__title" name="basic__title"><span>Basic Info</span></label>
                <input type="text" id="basic__title" placeholder="Title : Basic Information"></input>
            </div>
            <div className="basic__middle">
                <div className="middle__left">
                    <label htmlFor="name"><p>Name </p></label>
                    <input type="text" placeholder="Name"></input>
                    <label htmlFor="linkedin"><p>LinkedIn </p></label>
                    <input type="text" placeholder="Linkedin Link"></input>
                    <label htmlFor="email"><p>Email </p></label>
                    <input type="text" placeholder="Valid Email Id"></input>
                </div>
                <div className="middle__right">
                    <label htmlFor="your__title"><p>Title </p></label>
                    <input type="text" placeholder="Your title"></input>
                    <label htmlFor="github"><p>Github </p></label>
                    <input type="text" placeholder="Github link"></input>
                    <label htmlFor="mobile"><p>Mobile </p></label>
                    <input type="text" placeholder="Mobile No."></input>
                </div>
            </div>
            <div className="basic__bottom">
                <Button title="Prev" />
                <Button title="Save" />
                <Button title="Next" />
            </div>
        </div>
    );
}

export default BasicInfo;
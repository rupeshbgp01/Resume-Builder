import './Forms.css'



function Skills({ formData, setFormData }) {

    let name, value;
    function handleChange(event) {
        name = event.target.name;
        value = event.target.value;
        setFormData({ ...formData, [name]: value });
    }
    return (
        <div className="wrapper" >
            <div className="basic__container">

                <div className="basic__top">
                    <span>Skills</span>
                </div>

                <div className="basic__middle">
                    <div className="middle__left">
                        <input type="text" placeholder='Skill Type' name='skill1' value={formData.skill1} onChange={handleChange} ></input>
                        <input type="text" placeholder='Skill Type' name='skill2' value={formData.skill2} onChange={handleChange} ></input>
                        <input type="text" placeholder='Skill Type' name='skill3' value={formData.skill3} onChange={handleChange}></input>
                        <input type="text" placeholder='Skill Type' name='skill4' value={formData.skill4} onChange={handleChange}></input>
                        <input type="text" placeholder='Skill Type' name='skill5' value={formData.skill5} onChange={handleChange}></input>
                        <input type="text" placeholder='Skill Type' name='skill6' value={formData.skill6} onChange={handleChange}></input>
                        <input type="text" placeholder='Skill Type' name='skill7' value={formData.skill7} onChange={handleChange}></input>
                    </div>

                    <div className="middle__right">
                        <input type="text" placeholder='Example' name='skill1eg' value={formData.skill1eg} onChange={handleChange} ></input>
                        <input type="text" placeholder='Example' name='skill2eg' value={formData.skill2eg} onChange={handleChange} ></input>
                        <input type="text" placeholder='Example' name='skill3eg' value={formData.skill3eg} onChange={handleChange}></input>
                        <input type="text" placeholder='Example' name='skill4eg' value={formData.skill4eg} onChange={handleChange}></input>
                        <input type="text" placeholder='Example' name='skill5eg' value={formData.skill5eg} onChange={handleChange}></input>
                        <input type="text" placeholder='Example' name='skill6eg' value={formData.skill6eg} onChange={handleChange}></input>
                        <input type="text" placeholder='Example' name='skill7eg' value={formData.skill7eg} onChange={handleChange}></input>

                    </div>



                </div>
                
            </div>
        </div>
    );
}

export default Skills;
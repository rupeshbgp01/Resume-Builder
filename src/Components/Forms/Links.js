import "./Forms.css"


export default function Links({ formData, setFormData }) {

    let name, value;
    function handleChange(event) {
        name = event.target.name;
        value = event.target.value;
        setFormData({ ...formData, [name]: value });
    }
    return (
        <div className="wrapper">
            <div className="basic__container">

                <div className="basic__top">
                    <span>Links</span>
                </div>

                <div className="basic__middle">
                    <div className="middle__left">
                        <input type="text" placeholder='Link Name' name='link1name' value={formData.link1name} onChange={handleChange} ></input>
                        <input type="text" placeholder='Link Name' name='link2name' value={formData.link2name} onChange={handleChange} ></input>
                        <input type="text" placeholder='Link Name' name='link3name' value={formData.link3name} onChange={handleChange}></input>
                        <input type="text" placeholder='Link Name' name='link4name' value={formData.link4name} onChange={handleChange}></input>
                        <input type="text" placeholder='Link Name' name='link5name' value={formData.link5name} onChange={handleChange}></input>
                        <input type="text" placeholder='Link Name' name='link6name' value={formData.link6name} onChange={handleChange}></input>
                        <input type="text" placeholder='Link Name' name='link7name' value={formData.link7name} onChange={handleChange}></input>
                    </div>

                    <div className="middle__right">
                        <input type="url" placeholder='Link' name='link1' value={formData.link1} onChange={handleChange} ></input>
                        <input type="text" placeholder='Link' name='link2' value={formData.link2} onChange={handleChange} ></input>
                        <input type="text" placeholder='Link' name='link3' value={formData.link3} onChange={handleChange}></input>
                        <input type="text" placeholder='Link' name='link4' value={formData.link4} onChange={handleChange}></input>
                        <input type="text" placeholder='Link' name='link5' value={formData.link5} onChange={handleChange}></input>
                        <input type="text" placeholder='Link' name='link6' value={formData.link6} onChange={handleChange}></input>
                        <input type="text" placeholder='Link' name='link7' value={formData.link7} onChange={handleChange}></input>

                    </div>

                </div>
                <div>
                    
                </div>

            </div>
        </div>
    )
}


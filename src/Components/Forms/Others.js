import "./Forms.css"


export default function Other({ formData, setFormData }) {
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
                    <span>Add Extra section</span>
                </div>
                <div className="form__container">
                    <label><p></p></label>
                    <input type='text' placeholder='Section Title' name='other_section_title' value={formData.other_section_title} onChange={handleChange} />
                    <label><p></p></label>
                    <input type='text' className="message" placeholder='Write Something' name='other_section_detail1' value={formData.other_section_detail1} onChange={handleChange} />
                    <input type='text' className="message" placeholder='Write Something' name='other_section_detail2' value={formData.other_section_detail2} onChange={handleChange}  />
                    
                </div>
            </div>
        </div>
    )
}

import "./Input.css"

const Input = ({name, labelText,  placeholder, inputType, setInput }) => {
    return (
        <div className="form-control">
            <label htmlFor={name} className="form-label">{labelText}</label>
            <input 
            type={inputType} 
            name={name} 
            className="input" 
            id={name} 
            placeholder={placeholder}  
            onChange={(e) => setInput({type:"INPUT", name:e.target.name, input:e.target.value}) }
            autoComplete="on"
            />
        </div>
    );
}

export default Input;

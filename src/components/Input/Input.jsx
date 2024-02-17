import "./style.css";
function Input({ name, type, placeholder, label }) {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input
        
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input-field"
        required
      />
    </div>
  );
}
export default Input;

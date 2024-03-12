import './alert.css';

const Alert = ({ text, type }) => {
  return (
    <div className={`alert alert-${type}`}>
      <p>{text}</p>
    </div>
  );
}

export default Alert;
import './App.css'

function SquareComponent(props) {
  const className = props.className ? `${props.className} square` : 'square';
  return (
    <span className={className} onClick={props.onClick}>{props.state}</span>
  );
}

export default SquareComponent;

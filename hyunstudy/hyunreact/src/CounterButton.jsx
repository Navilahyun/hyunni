function CounterButton({ label, func }) {
  return <button className="btn btn-outline w-16" onClick={func}>{label}</button>;
}

export default CounterButton;
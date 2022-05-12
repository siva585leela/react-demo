export const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello props name {props.name} for hero {props.heroName} age {12 + 6}
      </h1>
      <span style={{ color: "red", height: "40px" }}>{props.children}</span>
      <span style={{ color: "blue" }}>{props.children}</span>
      <span style={{ color: "green" }}>{props.children}</span>
      {props.children}
    </div>
  );
};

//export default Greet;

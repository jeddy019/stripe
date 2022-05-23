import { useGlobalContext } from "../hooks/context";

function Button() {
  const { onRouteChange } = useGlobalContext();

  return (
    <button onClick={() => onRouteChange("home")} className="btn btn-primary">
      back home
    </button>
  );
}

export default Button;

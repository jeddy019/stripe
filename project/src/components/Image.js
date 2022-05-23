import Button from "./Button";
import { useGlobalContext } from "../hooks/context";
import useMediaQuery from "../hooks/useMediaQuery";

function Image() {
  const { predictions, imageToPredict } = useGlobalContext();

  const isMobile = useMediaQuery("(min-width: 992px)");

  const round = (num) => {
    let m = Number((Math.abs(num) * 100).toPrecision(15));
    return (Math.round(m) / 100) * Math.sign(num);
  };

  return (
    <section className="prediction-container">
      {isMobile ? <Button /> : ""}
      <div className="prediction">
        {imageToPredict ? <img src={imageToPredict} alt=""></img> : ""}
        <section className="prediction-section">
          <ul className="prediction-container-list">
            <li className="prediction-headers">
              <h3>Predictions</h3>
              <h3>Probability</h3>
            </li>
            {predictions.map((prediction, index) => {
              return (
                <li key={index} className="demo tag-block prediction-list">
                  <span className="prediction-name">{prediction.name}</span>
                  <span className="prediction-value">
                    {round(prediction.value * 100)}%
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      {isMobile ? "" : <Button />}
    </section>
  );
}

export default Image;

import { useState } from "react";
import { useGlobalContext } from "../hooks/context";
import axios from "axios";
import isURL from "validator/lib/isURL";
import Loader from "./Loader";

function ImageLinkForm() {
  const [imageUrl, setImageUrl] = useState("");
  const [fileObj, setFileObj] = useState(null);
  const [loading, setLoading] = useState(false);

  const { setImageToPredict, setPredictions, onRouteChange } =
    useGlobalContext();

  let options = {
    protocols: ["http", "https", "ftp"],
    require_tld: true,
    require_protocol: false,
    require_host: true,
    require_valid_protocol: true,
    allow_underscores: false,
    host_whitelist: false,
    host_blacklist: false,
    allow_trailing_dot: false,
    allow_protocol_relative_urls: false,
    disallow_auth: false,
  };

  const onInputChange = (e) => {
    setImageUrl(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (isURL(imageUrl, options) === false) {
      return alert("Please enter a valid url");
    }
    setPredictions([]);
    setImageToPredict(imageUrl);
    setLoading(true);
    axios
      .post("/predict", {
        imageUrl: imageUrl,
      })
      .then((res) => {
        setLoading(false);
        setPredictions(res.data.results);
        if (isURL(imageUrl, options) === true) {
          return onRouteChange("image");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const onFileSubmit = (e) => {
    e.preventDefault();
    if (fileObj === null) {
      return alert("Please select an image to upload");
    }
    setLoading(true);
    setPredictions([]);
    const formData = new FormData();
    formData.append("file", fileObj);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImageToPredict(reader.result);
    });

    if (fileObj) {
      reader.readAsDataURL(fileObj);
    }

    axios
      .post("/predict/upload", formData)
      .then((res) => {
        setLoading(false);
        setPredictions(res.data.results);
        onRouteChange("image");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const onFileUpload = (e) => {
    if (e.target.files.length) {
      setFileObj(e.target.files[0]);
    }
  };

  if (loading) {
    return <Loader />;
  } else {
    return (
      <section className="margin section search">
        <form className="search-form" onSubmit={onFormSubmit}>
          <p>place your image url below</p>
          <div className="form-control">
            <input type="text" onChange={onInputChange} />
            <button type="submit" className="btn btn-primary btn-details">
              analyze
            </button>
          </div>
        </form>
        <br />
        <h2 className="text-center">OR</h2>
        <form className="search-form" onSubmit={onFileSubmit}>
          <p>upload an image below</p>
          <div className="form-control">
            <input type="file" onChange={onFileUpload} />
            <button type="submit" className="btn btn-primary btn-details">
              analyze
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default ImageLinkForm;

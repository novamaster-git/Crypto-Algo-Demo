import React, { Fragment, useState } from "react";
import Crypto from "crypto"; // ! Inbuild node.js module
const SHAAlgo = () => {
  const HashList = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5"];
  const [TextToEncrypt, setTextToEncrypt] = useState("");
  const [HashOutput, setHashOutput] = useState("");
  const [SHAType, setSHAType] = useState("1");
  const generateHashHandler = () => {
    if (SHAType === "1") {
      alert("Please Select SHA Type");
    } else {
      setHashOutput(
        Crypto.createHash(SHAType).update(TextToEncrypt).digest("hex")
      );
    }
  };
  const CleanHistoryHandler = () => {
    setHashOutput("");
    setSHAType("1");
    setTextToEncrypt("");
  };
  return (
    <Fragment>
      <div className="container d-flex flex-column align-items-center mt-5">
        <div className="card col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12">
          <div className="card-header">Hashing Algorithm</div>
          <div className="d-flex flex-column align-items-center">
            <div className="mt-3 mb-3 w-75">
              <lable htmlFor="ShaOption">Select SHA Type :</lable>
              {/* ! Select */}
              <select
                className="form-select mt-1"
                id="ShaOption"
                aria-label="Select SHA Hashing Algo Type"
                onChange={(e) => {
                  setSHAType(e.target.value);
                }}
                value={SHAType}
              >
                <option defaultValue value="1">
                  Select SHA Type
                </option>
                {HashList.map((element) => {
                  return <option value={element}>{element}</option>;
                })}
              </select>
            </div>
            <div className="w-75 d-flex mb-3 flex-column">
              <lable htmlFor="textToHash">Enter The Text :</lable>
              <textarea
                id="textToHash"
                className="form-control"
                rows="10"
                onChange={(e) => {
                  setTextToEncrypt(e.target.value);
                }}
                value={TextToEncrypt}
              ></textarea>
            </div>
            <div className="w-75 d-flex flex-column">
              <lable htmlFor="HashText">Output Hash :</lable>
              <textarea
                id="HashText"
                className="form-control"
                rows="10"
                value={HashOutput}
              ></textarea>
            </div>
            <div className="w-75 d-flex flex-row justify-content-center mt-3 mb-3">
              <button
                className="btn btn-primary mx-3"
                onClick={generateHashHandler}
              >
                Generate Hash
              </button>
              <button
                className="btn btn-danger mx-3 px-4"
                onClick={CleanHistoryHandler}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default SHAAlgo;

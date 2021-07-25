import React, { Fragment, useState } from "react";
import nodeRSA from "node-rsa";
const RSAAlgo = () => {
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [udPublicKey, setUdPublicKey] = useState("");
  const [udPrivateKey, setUdPrivateKey] = useState("");
  const [textToEnc, setTextToEnc] = useState("");
  const [textToDec, setTextToDec] = useState("");
  const [outputCyferText, setOutputCyferText] = useState("");
  const [decText, setDecText] = useState("");
  const generateKeyHandler = () => {
    const keyGen = new nodeRSA({ b: 1024 });
    setPublicKey(keyGen.exportKey("public"));
    setPrivateKey(keyGen.exportKey("private"));
  };
  const clearKeyHandler = () => {
    setPrivateKey("");
    setPublicKey("");
  };
  const EncryptText = () => {
    const KeyGen = new nodeRSA({ b: 1024 });
    KeyGen.importKey(udPublicKey, "public");
    setOutputCyferText(KeyGen.encrypt(textToEnc, "base64"));
  };
  const DecryptText = () => {
    const KeyGen = new nodeRSA({ b: 1024 });
    KeyGen.importKey(udPrivateKey, "private");
    setDecText(KeyGen.decrypt(textToDec, "utf8"));
  };
  return (
    <Fragment>
      <div className="container-fluid d-flex flex-column align-items-center mt-xl-5 mt-sm-2 mt-1 ">
        <div className="col-12 col-xl-8 col-lg-10 col-md-10 col-sm-12 card mt-5 d-flex flex-column">
          <div className="card-header">RSA Algorithm</div>
          <div className="d-flex flex-xl-row flex-lg-row flex-md-column flex-sm-column flex-column align-items-center mt-4 p-3">
            <div className="mb-3 w-75 mx-1">
              <label htmlFor="privateKey">Private Key</label>
              <div className="input-group">
                <textarea
                  className="form-control"
                  rows="10"
                  id="privateKey"
                  value={privateKey}
                ></textarea>
              </div>
            </div>
            <div className="mb-3 w-75 mx-1">
              <label htmlFor="publicKey">Public Key</label>
              <div className="input-group">
                <textarea
                  className="form-control"
                  rows="10"
                  id="publicKey"
                  value={publicKey}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mb-3 w-100 d-flex justify-content-center">
            <button
              className="btn btn-primary mx-2"
              onClick={generateKeyHandler}
            >
              Generate
            </button>
            <button className="btn btn-danger mx-2" onClick={clearKeyHandler}>
              Clear
            </button>
          </div>
        </div>
      </div>
      <div
        className="
        container-fluid
        d-flex
        flex-xl-row
        flex-lg-row
        flex-md-row
        flex-sm-column
        flex-column
        justify-content-between
        justify-content-sm-start
        mt-5
        mb-5
      "
      >
        <div className="card w-100 mt-2 mx-xl-5 mx-lg-3 mx-md-2">
          <div className="card-header">Encrypt using Public key</div>
          <div className="d-flex flex-column align-items-center mt-4">
            <div className="mb-3 w-75">
              <label htmlFor="publicKeyToEnc">Public Key</label>
              <div className="input-group">
                <textarea
                  rows="10"
                  className="form-control"
                  id="publicKeyToEnc"
                  onChange={(e) => {
                    setUdPublicKey(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <div className="mb-3 w-75">
              <label htmlFor="textToEnc">Text to Encrypt</label>
              <div className="input-group">
                <textarea
                  className="form-control"
                  id="textToEnc"
                  onChange={(e) => {
                    setTextToEnc(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <div className="mb-3 w-75">
              <label htmlFor="cyferText">Cyfer Text</label>
              <div className="input-group">
                <textarea
                  rows="5"
                  disabled
                  className="form-control"
                  id="cyferText"
                  value={outputCyferText}
                ></textarea>
              </div>
            </div>
            <div className="mb-3 w-75 d-flex justify-content-center">
              <button className="btn btn-warning mx-2" onClick={EncryptText}>
                Encrypt
              </button>
              <button className="btn btn-danger mx-2">Clear</button>
            </div>
          </div>
        </div>

        <div className="card w-100 mt-2 mx-xl-5 mx-lg-3 mx-md-2">
          <div className="card-header">Decrypt using Private key</div>
          <div className="d-flex flex-column align-items-center mt-4">
            <div className="mb-3 w-75">
              <label htmlFor="privateKeyToDec">Private Key</label>
              <div className="input-group">
                <textarea
                  rows="10"
                  className="form-control"
                  id="privateKeyToDec"
                  onChange={(e) => {
                    setUdPrivateKey(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <div className="mb-3 w-75">
              <label htmlFor="cyferToDec">Text to Decrypt</label>
              <div className="input-group">
                <textarea
                  className="form-control"
                  id="cyferToDec"
                  onChange={(e) => {
                    setTextToDec(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <div className="mb-3 w-75">
              <label htmlFor="decText">Decrypted Text</label>
              <div className="input-group">
                <textarea
                  rows="5"
                  disabled
                  className="form-control"
                  id="decText"
                  defaultValue={decText}
                ></textarea>
              </div>
            </div>
            <div className="mb-3 w-75 d-flex justify-content-center">
              <button className="btn btn-warning mx-2" onClick={DecryptText}>
                Decrypt
              </button>
              <button className="btn btn-danger mx-2">Clear</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default RSAAlgo;

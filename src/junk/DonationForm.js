import { setGlobalState } from "../store/Index";
import CryptoDonation from "./CryptoDonation";

const DonationForm = () => {
  return (
    <>
      <div
        className="app-flow"
        style={{
          position: "relative",
          top: "0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="app-flow-container"
          style={{ position: "fixed", top: "6rem" }}
        >
          <div className="spacer-40"></div>
          <div className="flow">
            <div className="flow-header">
              <h2 className="title-3 text-ellipsis">Secure donation</h2>
            </div>
            <div className="spacer-24"></div>
            <button
              type="submit"
              className="btn btn-primary"
              data-qa="donate-button"
              data-tracking-element-name="nextButton"
              onClick={() => setGlobalState("cryptoDonateModal", "scale-100")}
            >
              Donate Using Crypto
            </button>
            <div className="spacer-20"></div>
            <button
              type="submit"
              className="btn btn-primary"
              data-qa="donate-button"
              data-tracking-element-name="nextButton"
            >
              Donate Using Card
            </button>
            <CryptoDonation />
          </div>

          {/* Flow Footer */}
          <div className="flow-footer">
            <div className="spacer-48"></div>
            <hr className="my-0" />
            <div className="spacer-16"></div>
            <div>
              <button
                type="button"
                className="btn-link link-3 text-left text-gray-60-hover-gray-100 text-break-word max-w-100 me-3"
                data-qa="is-donation-secure"
              >
                Is my donation secure?
              </button>
              <button
                type="button"
                className="btn-link link-3 text-left text-gray-60-hover-gray-100 text-break-word max-w-100 me-3"
                data-qa="cancel-recurring-donation"
              >
                Can I cancel my recurring donation?
              </button>
            </div>
          </div>
          <div className="spacer-80"></div>
        </div>
      </div>
    </> 
  );
};

export default DonationForm;

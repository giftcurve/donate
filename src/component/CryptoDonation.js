import { setGlobalState, useGlobalState } from "../store/Index";
import Buttons from "./Buttons";

const CryptoDonation = () => {
  const [cryptoDonateModal] = useGlobalState("cryptoDonateModal");

  // ${cryptoDonateModal}

  return (
    <>
      <div
        className={`app-flow d-block ${cryptoDonateModal} `}
        style={{ position: "fixed", top: "0", left: "0", backgroundColor: "white", height: "100%",  width: "100vw", zIndex:"9999", }}
      >
        <div className="app-flow-container">
          <div className="spacer-40"></div>

          <header className="header">
            <div className="header-company">
              <div>
                <img
                  src="https://ucarecdn.com/7da37110-60df-4243-9943-78844df2f7e5/-/resize/x56/-/format/auto/"
                  className="header-company-logo"
                  width="56"
                  height="56"
                  alt="Muslimi"
                  data-testid="campaign-logo"
                />
              </div>
            </div>
            <div
              className="p-rel header-mediasharing flex-shrink-0 ms-5"
              role="group"
              aria-label="Donation sharing"
            >
              <div className="d-flex align-items-center">
                <button
                  type="button"
                  className="btn-icon mediasharing-control line-height-18 mediasharing-facebook flex-shrink-0"
                  aria-label="Share on Facebook"
                  data-testid="facebook-sharing"
                >
                  {/* Facebook icon */}
                  <span
                    className="icon-slot flex-shrink-0 icon-slot-18 font-size-18"
                    aria-hidden="true"
                  >
                    <span className="p-abs centered">
                      <svg
                        fill="none"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon-fill d-block"
                      >
                        <path
                          d="m24 12c0 6.6274-5.3726 12-12 12-6.62742 0-12-5.3726-12-12 0-6.62742 5.37258-12 12-12 6.6274 0 12 5.37258 12 12z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="m16.6713 15.4685.532-3.4689h-3.3282v-2.25093c0-.94901.465-1.8741 1.9557-1.8741h1.5131v-2.95318s-1.3732-.23438-2.6862-.23438c-2.741 0-4.5326 1.66128-4.5326 4.66884v2.64375h-3.04698v3.4689h3.04698v8.3856c.611.0958 1.237.1458 1.875.1458s1.264-.05 1.875-.1458v-8.3856z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className="btn-icon mediasharing-control line-height-18 mediasharing-linkedin flex-shrink-0"
                  aria-label="Share on LinkedIn"
                  data-testid="linkedin-sharing"
                >
                  {/* LinkedIn icon */}
                  <span
                    className="icon-slot flex-shrink-0 icon-slot-18 font-size-18"
                    aria-hidden="true"
                  >
                    <span className="p-abs centered">
                      <svg
                        fill="none"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon-fill d-block"
                      >
                        <g clipRule="evenodd" fillRule="evenodd">
                          <path
                            d="m2.66641 23.9977h18.66489c1.4726 0 2.6664-1.1938 2.6664-2.6664v-18.66489c0-1.47262-1.1938-2.66641-2.6664-2.66641h-18.66489c-1.47262 0-2.66641 1.19379-2.66641 2.66641v18.66489c0 1.4726 1.19379 2.6664 2.66641 2.6664z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="m20.6642 20.6647h-3.5611v-6.0654c0-1.663-.6319-2.5923-1.9481-2.5923-1.4319 0-2.18.9671-2.18 2.5923v6.0654h-3.43196v-11.55446h3.43196v1.55636s1.0319-1.90937 3.4838-1.90937c2.4508 0 4.2054 1.49657 4.2054 4.59187zm-15.21543-13.06743c-1.16899 0-2.11625-.95469-2.11625-2.13213s.94726-2.13213 2.11625-2.13213c1.16898 0 2.11568.95469 2.11568 2.13213s-.9467 2.13213-2.11568 2.13213zm-1.7721 13.06743h3.57861v-11.55446h-3.57861z"
                            fill="#fff"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className="btn-icon mediasharing-control line-height-18 mediasharing-twitter flex-shrink-0"
                  aria-label="Share on Twitter"
                  data-testid="twitter-sharing"
                >
                  {/* Twitter icon */}
                  <span
                    className="icon-slot flex-shrink-0 icon-slot-18 font-size-18"
                    aria-hidden="true"
                  >
                    <span className="p-abs centered">
                      <svg
                        fill="none"
                        height="20"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon-fill d-block"
                      >
                        <path
                          d="m11.5952 8.6895 6.2104-7.21904h-1.4717l-5.3924 6.26819-4.30696-6.26819h-4.96755l6.51294 9.47864-6.51294 7.5703h1.47174l5.69457-6.6195 4.5484 6.6195h4.9676l-6.7544-9.8299zm-2.01572 2.3431-.6599-.9439-5.25056-7.51034h2.26051l4.23727 6.06111.6599.94386 5.5079 7.87847h-2.2605l-4.49462-6.4289z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className="mediasharing-control mediasharing-url flex-shrink-0 btn-icon line-height-18"
                  aria-label="Copy link"
                  data-testid="copy-link-sharing"
                >
                  {/* Copy link icon */}
                  <span
                    className="icon-slot icon-slot-18 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <span className="p-abs centered font-size-18">
                      <svg
                        fill="none"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon-stroke d-block"
                      >
                        <g
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        >
                          <path d="m10 13c.4295.5741.9774 1.0491 1.6066 1.3929.6291.3438 1.3249.5482 2.0401.5994.7151.0512 1.4329-.052 2.1046-.3026.6718-.2505 1.2818-.6427 1.7887-1.1497l3-3c.9108-.94305 1.4148-2.20606 1.4034-3.51704s-.5373-2.56505-1.4643-3.49209-2.1811-1.45288-3.4921-1.46427c-1.311-.0114-2.574.49258-3.517 1.40337l-1.72 1.71"></path>
                          <path d="m14.0002 11c-.4295-.5741-.9774-1.0492-1.6066-1.39296-.6291-.34376-1.3249-.54818-2.0401-.59939-.71509-.05122-1.43289.05196-2.10465.30255-.67175.25059-1.28176.64271-1.78865 1.1498l-3 3c-.91079.943-1.41476 2.206-1.40337 3.517s.53724 2.565 1.46428 3.4921c.92704.927 2.1811 1.4529 3.49208 1.4643 1.31099.0113 2.574-.4926 3.51701-1.4034l1.71-1.71"></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </header>
          <div className="spacer-32"></div>

          <button
            type="button"
            className="btn-link label-5 d-flex align-items-center text-gray-60-hover-gray-100 text-nodecor"
            data-qa="back-checkout"
            data-tracking-element-name="backButton"
            onClick={() => setGlobalState("cryptoDonateModal", "scale-0")}
          >
            <span
              className="icon-slot icon-slot-12 flex-shrink-0 me-1"
              aria-hidden="true"
            >
              <span className="p-abs centered font-size-12">
                <svg
                  fill="none"
                  height="12"
                  viewBox="0 0 12 12"
                  width="12"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-stroke d-block"
                  data-testid="back-icon"
                >
                  <g
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9.5 6h-7"></path>
                    <path d="m6 9.5-3.5-3.5 3.5-3.5"></path>
                  </g>
                </svg>
              </span>
            </span>
            <span className="text-nowrap">Back</span>
          </button>

          <Buttons />
        </div>

        <div className="spacer-80"></div>
      </div>
    </>
  );
};

export default CryptoDonation;

import { useEffect } from "react";
import { getBackers, loadProjects } from "../services/blockchain";
import { setGlobalState, truncate, useGlobalState } from "../store/Index";
import Moment from "react-moment";
import { globe } from "../res/image/Images";
import Buttons from "./Buttons";
import CryptoDonation from "./CryptoDonation";

const Campaign = () => {
  const [projects] = useGlobalState("projects");
  const [backers] = useGlobalState("backers");
  const raisedPercentage = (projects[0]?.raised / projects[0]?.cost) * 100 + 25.13;
const calculatedLeft = `calc(${Math.min(raisedPercentage, 100)}% + 3px)`;
const recentBackers = backers.slice(-10).reverse();
const [ethToUsdRate] = useGlobalState("ethToUsdRate");
console.log(ethToUsdRate)

  useEffect(() => {
    const fetchData = async () => {
      await loadProjects();
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchBackers = async () => {
      if (projects.length > 0) {
        await getBackers(projects[0].id);
      }
    };

    fetchBackers();
  }, [projects]);


  return (
    <>
      <div
        className="app-campaign"
        style={{ position: "relative", top: "0px" }}
      >
        <div className="app-campaign-container">
          <div className="spacer-28"></div>
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
          <div className="spacer-40"></div>
          <section className="campaign" data-qa="campaign-info-section">
            <h1
              className="title-1 text-ellipsis"
              dir="auto"
              data-qa="ask-title"
            >
              <span className="emoji-symbol">🚨</span>
              {projects[0]?.title}
            </h1>
            <div className="spacer-32"></div>
            <div className="campaign-meter" data-qa="campaign-meter-full" >
              <div
                className="campaign-meter-raised"
                data-testid="raised-percent"
                data-qa="campaign-meter-raised"
                style={{
                  width: `${
                    (projects[0]?.raised / projects[0]?.cost) * 100 + 25.13
                  }%`,  maxWidth: "100%"
                }}
              ></div>
              <div
                className="campaign-meter-impact"
                data-testid="impact-percent"
                data-qa="campaign-meter-impact"
                style={{
                  width: "1%",
                  maxWidth: "15%",
                  left: calculatedLeft,
                  right: "auto",
                }}
              ></div>
              <div
                className="campaign-meter-unfilled"
                style={{
                  width: `calc(${
                    ((projects[0]?.cost - projects[0]?.raised) /
                      projects[0]?.cost) *
                      100 -
                    25.13
                  }% - 11px)`,
                }}
              ></div>
              <div
                className="ui-tooltip ui-tooltip-desktop ui-tooltip-top ui-tooltip-sm w-auto ui-tooltip-to-top-enter-done"
                role="status"
                aria-live="polite"
                style={{
                  position: "absolute",
                   top: "-32px",
                  left: `calc(${calculatedLeft} - 42px)`,
                  maxWidth: "200px",
                }}
              >
                <div className="ui-tooltip-body ui-tooltip-body-desktop">
                  <p className="text-center text-truncate">Your impact</p>
                </div>
                <div
                  className="ui-tooltip-arrow"
                  style={{ left: "42px", bottom: "-6px" }}
                ></div>
              </div>
            </div>
            <div className="d-flex align-items-baseline justify-content-space-between mt-1">
              <p
                className="body-2 text-ellipsis campaign-meter-raised-amount"
                data-qa="fundraiser-raised-amount"
                data-testid="raised-amount"
              >
                <strong>
                  ${(projects[0]?.raised * ethToUsdRate + 125655.52).toLocaleString()}
                </strong>
                raised
              </p>
              <p
                className="body-2 text-gray-60 text-sans-serif text-right text-ellipsis ms-3"
                data-testid="total-amount"
                data-qa="fundraiser-goal-amount"
              >
                ${projects[0]?.cost + 494}K
              </p>
            </div>
            <div className="spacer-40"></div>
            <div className="bg-gray-10 overflow-hidden border-radius-16">
              <img
                className="d-block w-100 h-auto"
                src="https://ucarecdn.com/defce42f-83ed-43d3-8f79-a1cffc5dd09b/-/resize/624x/-/format/auto/"
                alt="Campaign"
                width="624"
                height="352"
                data-qa="ask-image"
              />
            </div>
            <div className="spacer-20"></div>
            <p className="text-ellipsis" dir="auto" data-qa="ask-message">
              <strong>
                <span className="emoji-symbol">🤝</span>
                Our charity partners are delivering aid to our brothers and
                sisters in Gaza.
                <br />
                <br />
                <span className="emoji-symbol">⚠️</span>
                The overall death toll in Palestine is 9,000+ (40% are
                children), and over 32,000 are injured. 2.3 million people are
                at risk.
              </strong>
              <br />
              <br />
              <span className="emoji-symbol">💡</span>
              Muslimi is working with our charity partners to ensure your aid is
              delivered in Gaza. Your donation is an Amana, which will reach our
              partners on the ground. Our charity partners have emergency aid
              stockpiles and are getting resources from within Gaza; though
              these resources are being reduced daily, they are being
              replenished as the Egypt-Rafah border crossing is slowly letting
              aid in inshaAllah.
              <br />
              <strong>
                <br />
                The Rafah border crossing between Egypt and Gaza has opened to
                let needed aid flow to Palestinians running short of food,
                medicine, and water in Gaza. Meanwhile, aid deliveries have come
                as the Israeli military continued bombing Gaza and Rafah.
                <br />
              </strong>
              <br />
              <strong>Your Urgent Support is Needed</strong>:
              <br />
              <br />
              Our brothers and sisters in Gaza are facing a calamity and need
              urgent help. Your generous support can provide the much-needed
              relief and hope.
              <strong>
                The Prophet Muhammad (Peace Be Upon Him) said, “The believer’s
                shade on the Day of Resurrection will be his charity.”
                (Al-Tirmidhi).
              </strong>{" "}
              Let your charity be the shade for the distressed souls in Gaza,
              embodying the mercy and compassion that Islam teaches us.
              <br />
              <br />
              <strong>What does your donation provide?</strong>
              <br />
              <br />
              <strong>
                <span className="emoji-symbol">🍞</span>
                Food Supplies
              </strong>
              : Emergency food packs to fend off hunger.
              <br />
              <strong>
                <span className="emoji-symbol">💧</span>
                Clean Water:
              </strong>
              Safe drinking sources and purification solutions. (Water Tanks)
              <strong>
                <br />
                <span className="emoji-symbol">🏥</span>
                Medical Aid
              </strong>
              : Vital medical supplies to the hospitals.
              <br />
              <strong>
                <span className="emoji-symbol">⛺</span>️ Shelter
              </strong>
              : A safe haven for those displaced by the ongoing violence.
              <br />
              <br />
              Your donation right now can be the lifeline for many in Gaza.
              Let’s unite in this hour of dire need and show that the Ummah
              stands united with the innocent civilians in Gaza.
              <br />
              <br />
              <span className="emoji-symbol">🆘</span>
              $75 USD = 15 Hot Meals
              <br />
              <span className="emoji-symbol">🆘</span>
              $100 USD = Emergency Food Pack
              <br />
              <span className="emoji-symbol">🆘</span>
              $125 USD = Clean Drinking Water
              <br />
              <span className="emoji-symbol">🆘</span>
              $200 USD = Emergency Medical Supplies to Hospitals
              <br />
              <span className="emoji-symbol">🆘</span>
              $500 USD = Emergency Shelter
              <br />
              <span className="emoji-symbol">🆘</span>
              $1,000 USD = Emergency Aid Combo (Meals, Water, Aid, Shelter)
              <br />
              <br />
              Ya Allah, protect the innocent souls of Gaza, grant them strength,
              and ease their suffering. Provide security and safety for every
              human, and let there be peace in every corner of the world. Guide
              us to be their beacon of hope, to extend our hands when they need
              it most, and to be the answer to their prayers. Ameen!
              <br />
              <br />
              Please, we implore you, donate now. They need us. They're counting
              on us.
              <br />
              <br />
              <strong>
                <span className="emoji-symbol">✅</span>
                YOUR DONATION IS ZAKAT-ELIGIBLE
              </strong>
            </p>
            <div className="spacer-40"></div>
            <h3 className="title-4 text-ellipsis">Recent donations</h3>
            <div className="spacer-20"></div>
            {recentBackers.map((backer, i) => (
  <div
    key={i}
    className="px-5 pt-4 mb-4 border border-gray-15 border-radius-16 pb-4 d-flex flex-row-reverse align-items-flex-start"
    data-testid={backer.id} // You can use a unique identifier here
  >
                <p
                  className="body-1 text-primary text-sans-serif flex-shrink-0 ms-5"
                  style={{ marginTop: "-2px" }}
                >
                  ${(backer.contribution * ethToUsdRate).toLocaleString()}
                </p>
                <div
                  className="flex-grow-1 me-auto"
                  style={{ maxWidth: "450px" }}
                >
                  <p className="label-3 text-ellipsis">
                    <strong>{truncate(backer.owner, 2, 4, 10)}</strong> made
                    donation with crypto
                  </p>
                  <p className="label-5 text-gray-80 text-ellipsis mt-1">
                    <span
                      className="icon-slot icon-slot-14 d-inline-block me-2"
                      aria-hidden="true"
                    >
                      <span className="p-abs centered">
                        <img
                          src={globe}
                          width="14"
                          height="14"
                          className="d-block"
                          alt="MV"
                        />
                      </span>
                    </span>
                    Anonymous
                    <span className="d-inline-block text-gray-40 mx-1">·</span>
                    <span className="d-inline-block text-nowrap">
                      <Moment fromNow>{backer.timestamp}</Moment>
                    </span>
                  </p>
                </div>
              </div>
            ))}
            <div className="spacer-16"></div>
          </section>
          <div className="spacer-80"></div>
          <div className="spacer-20"></div>
          <div className="app-campaign-fixed-panel">
          <button
        type="button"
        className="btn btn-primary app-campaign-fixed-btn"
        data-qa="mobile-donate-button"
        onClick={() => setGlobalState("cryptoDonateModal", "scale-100")}
      >
       Donate Using Crypto
         </button>
          </div>
          /
          {/* this is for mobile */}
          <CryptoDonation />
        </div>
      </div>
      {/* this is for destop */}
      <Buttons />
      
    </>
  );
};

export default Campaign;

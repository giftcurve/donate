import React, { useState, useEffect } from "react";
import { setGlobalState, useGlobalState } from "../store/Index";
import { backProject } from "../services/blockchain";
import { toast } from "react-toastify";
import ConnectButton from "./ConnectButton";

const Buttons = () => {
  const [projects] = useGlobalState("projects");
  const project = projects[0]; // Access the first element
  const [donationFrequency, setDonationFrequency] = useState("once");
  const [donationAmountUSD, setDonationAmountUSD] = useState(100);
  const [donationAmountETH, setDonationAmountETH] = useState("");
  const [ethToUsdRate, setEthToUsdRate] = useState(0);
  const [dedicateDonation, setDedicateDonation] = useState(false);
  const [donationGoal, setDonationGoal] = useState("EL6VVAKZ");

  useEffect(() => {
    // Fetch Ethereum to USD conversion rate from CoinGecko API
    const fetchEthToUsdRate = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        );
        const data = await response.json();
        setEthToUsdRate(data.ethereum.usd);

        // Calculate and set the initial Ethereum amount based on the default donationAmountUSD
        const initialEthAmount = (
          donationAmountUSD / data.ethereum.usd
        ).toFixed(6);
        setDonationAmountETH(initialEthAmount);
        setGlobalState("ethToUsdRate", data.ethereum.usd);
      } catch (error) {
        console.error("Error fetching Ethereum to USD rate:", error);
      }
    };

    fetchEthToUsdRate();
  }, [donationAmountUSD, setEthToUsdRate]);

  const handleAmountUSDChange = (amount) => {
    setDonationAmountUSD(amount);
    // Calculate Ethereum equivalent based on the conversion rate
    setDonationAmountETH((amount / ethToUsdRate).toFixed(6));
  };

  const handleAmountETHChange = (amount) => {
    setDonationAmountETH(amount);

    // Calculate USD equivalent based on the conversion rate
    const usdEquivalent = (amount * ethToUsdRate).toFixed(2);
    setDonationAmountUSD(usdEquivalent);
  };

  const handleFrequencyChange = (frequency) => {
    setDonationFrequency(frequency);
  };

  const handleDedicateDonationChange = () => {
    setDedicateDonation(!dedicateDonation);
  };

  const handleGoalChange = (goal) => {
    setDonationGoal(goal);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!donationAmountETH || !project) return;

    try {
      await backProject(project.id, donationAmountETH);
      toast.success(
        "Thank you for your donation! The project has been backed successfully and will reflect in 30 seconds."
      );
    } catch (error) {
      // Handle other errors if needed
      console.error("Error in handleSubmit:", error);
      toast.error(
        "An error occurred while processing your donation. Please try again."
      );
    }
    // Handle donation submission logic here
    console.log("Donation Submitted:", {
      frequency: donationFrequency,
      amountUSD: donationAmountUSD,
      amountETH: donationAmountETH,
      dedicate: dedicateDonation,
      goal: donationGoal,
    });
  };



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
        <div className="app-flow-container" style={{ position: "fixed" }}>
          <div className="spacer-40"></div>
          <div className="flow">
            <div className="flow-slide">
              <form
                aria-label="Secure donation screen, donation checkout"
                data-qa="fiat-donate-form"
                onSubmit={handleSubmit}
              >
                <div className="flow-header">
                  <h2 className="title-3 text-ellipsis">Secure donation</h2>
                </div>
                <div className="spacer-24"></div>
                <div className="flow-body">
                  <div className="frequency" aria-label="Donation frequency">
                    <button
                      type="button"
                      className={`frequency-btn ${
                        donationFrequency === "once"
                          ? "frequency-btn-selected"
                          : ""
                      }`}
                      onClick={() => handleFrequencyChange("once")}
                    >
                      <span className="text-truncate">Give once</span>
                    </button>
                    <button
                      type="button"
                      className={`frequency-btn ${
                        donationFrequency === "monthly"
                          ? "frequency-btn-selected"
                          : ""
                      }`}
                      onClick={() => handleFrequencyChange("monthly")}
                    >
                      <span
                        className="p-rel flex-shrink-0 text-fuchsia-80 me-1"
                        aria-hidden="true"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="d-block"
                        >
                          <path
                            d="M12 20C28.659 10.9628 18.2615 0.617428 12 6.95101C5.73851 0.617357 -4.659 10.9627 12 20Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span className="p-abs top-left z-index-1">
                          <span className="d-block"></span>
                        </span>
                      </span>

                      <span className="text-truncate">Monthly</span>
                    </button>
                  </div>

                  {/* Suggested Donation Amount Options */}
                  <div className="spacer-20"></div>
                  <div className="suggestion" aria-label="Suggested amounts">
                    {[2500, 1000, 500, 250, 100, 50].map((amount) => (
                      <div
                        key={amount}
                        className="suggestion-amount"
                        data-qa="suggested-amount-button"
                      >
                        <input
                          type="radio"
                          id={`${amount}-option`}
                          className="suggestion-amount-radio"
                          title={`$${amount}`}
                          name="suggestionAmounts"
                          aria-label={`$${amount} donation`}
                          value={amount}
                          checked={donationAmountUSD === amount}
                          onChange={() => handleAmountUSDChange(amount)}
                        />
                        <label
                          htmlFor={`${amount}-option`}
                          className="suggestion-amount-label"
                        >
                          <span className="text-truncate text-sans-serif">
                            ${amount}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                  {/* Suggested donation amount options */}

                  <div className="spacer-12"></div>

                  {/* ... (rest of the code remains unchanged) */}
                  <div
                    className="price-control-group"
                    aria-label="Donation amount"
                  >
                    <div className="flex-shrink-0 align-self-center me-1 body-3 text-gray-80">
                      $
                    </div>
                    <label className="flex-grow-1">
                      <span className="sr-only">Donation amount $</span>
                      <input
                        type="number"
                        className="price-control text-sans-serif"
                        autoComplete="off"
                        placeholder="Other"
                        inputMode="decimal"
                        data-qa="amount-usd"
                        data-tracking-element-name="amountInputUSD"
                        data-testid="price-input-usd"
                        value={donationAmountUSD}
                        onChange={(e) =>
                          handleAmountUSDChange(Number(e.target.value))
                        }
                      />
                    </label>
                    <label className="flex-grow-1">
                      <span className="sr-only ">Donation amount ETH</span>
                      <input
                        type="number"
                        className="kay price-control text-sans-serif"
                        autoComplete="off"
                        placeholder="Ethereum"
                        inputMode="decimal"
                        data-qa="amount-eth"
                        data-tracking-element-name="amountInputETH"
                        data-testid="price-input-eth"
                        value={donationAmountETH}
                        onChange={(e) =>
                          handleAmountETHChange(Number(e.target.value))
                        }
                      />
                    </label>
                    {/* Additional elements for currency selection */}

                    <div
                      className="flex justify-between items-center
          bg-gray-300 rounded-xl mt-5"
                    ></div>

                    <div
                      className="d-flex align-items-center ps-3 pe-2 py-2 currency-select"
                      aria-hidden="true"
                    >
                      <span
                        className="label-3 kay-label"
                        data-qa="selected-currency"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 320 512"
                        >
                          <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                        </svg>
                        ETH
                      </span>
                    </div>
                  </div>
                  {/* ... (rest of the code remains unchanged) */}

                  <div className="spacer-28"></div>
                  <div className="ui-checkbox">
                    <label className="ui-checkbox-label">
                      <input
                        type="checkbox"
                        checked={dedicateDonation}
                        onChange={handleDedicateDonationChange}
                        data-qa="tribute-give-checkbox"
                        data-tracking-element-name="tributeCheckbox"
                      />
                      <span className="ui-checkbox-text">
                        <span className="text-truncate" data-qa="tribute-label">
                          Dedicate this donation
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="spacer-28"></div>

                  {/* Donation Goal Selector */}
                  <div className="d-flex">
                    <div className="p-rel" data-qa="goal-component">
                      <select
                        id="designation-7493619203107649626"
                        className="designation-select-control p-abs top-left bottom-right max-w-100 p-0 border-0 m-0 overflow-hidden cursor-pointer z-index-1"
                        onChange={(e) => handleGoalChange(e.target.value)}
                        value={donationGoal}
                        data-qa="goal-selector"
                        data-tracking-element-name="goalSelect"
                      >
                        <option value="EL6VVAKZ">where needed most</option>
                        <option value="EWT5F645">Zakat</option>
                      </select>
                      {/* Designation select label */}
                      <label
                        htmlFor="designation-7493619203107649626"
                        className="designation-select text-line-clamp-2"
                      >
                        <span className="label-3 d-inline text-nowrap me-2">
                          Designate to
                        </span>
                        <span
                          className="link-1 text-decor designation-select-label"
                          aria-hidden="true"
                          dir="ltr"
                          data-qa="selected-goal"
                        >
                          where needed
                          <span className="text-nowrap">
                            most
                            <svg
                              fill="none"
                              height="16"
                              viewBox="0 0 16 16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon-stroke d-inline text-middle"
                            >
                              <path
                                d="m4 6 4 4 4-4"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="spacer-40"></div>

                  <div className="connect">
                    <div className="connectButton">
                      <ConnectButton />
                    </div>

                    {/* Donate Button */}
                    <button
                      type="submit"
                      className="btn btn-primary"
                      data-qa="donate-button"
                      data-tracking-element-name="nextButton"
                    >
                      Donate
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="spacer-24"></div>
            <div className="flow-footer">
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
      </div>
    </>
  );
};

export default Buttons;

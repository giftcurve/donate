import React, { useState } from "react";

const CreditCardDonation = () => {
  const [donationFrequency, setDonationFrequency] = useState("once");
  const [donationAmount, setDonationAmount] = useState(15000);
  const [dedicateDonation, setDedicateDonation] = useState(false);
  const [donationGoal, setDonationGoal] = useState("EL6VVAKZ");

  const handleFrequencyChange = (frequency) => {
    setDonationFrequency(frequency);
  };

  const handleAmountChange = (amount) => {
    setDonationAmount(amount);
  };

  const handleDedicateDonationChange = () => {
    setDedicateDonation(!dedicateDonation);
  };

  const handleGoalChange = (goal) => {
    setDonationGoal(goal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission logic here
    console.log("Donation Submitted:", {
      frequency: donationFrequency,
      amount: donationAmount,
      dedicate: dedicateDonation,
      goal: donationGoal,
    });
  };

  return (
    <>
      <div className="app-flow-container ">
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
                {/* Donation Frequency Buttons */}
                <div className="frequency" aria-label="Donation frequency">
                  <button
                    type="button"
                    className={`frequency-btn ${
                      donationFrequency === "once"
                        ? "frequency-btn-selected"
                        : ""
                    }`}
                    onClick={() => handleFrequencyChange("once")}
                    aria-current={donationFrequency === "once"}
                    data-qa="less-frequent-button"
                    data-tracking-element-name="onceRepeat"
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
                    aria-current={donationFrequency === "monthly"}
                    data-qa="more-frequent-button"
                    data-tracking-element-name="monthlyPlan"
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
                  <div
                    className="suggestion-amount"
                    data-qa="suggested-amount-button"
                  >
                    <input
                      type="radio"
                      id="40000000-option"
                      className="suggestion-amount-radio"
                      title="₦400K"
                      name="suggestionAmounts"
                      aria-label="₦400K donation"
                      data-tracking-element-name="suggestionButton"
                      value="40000000"
                    />
                    <label
                      for="40000000-option"
                      className="suggestion-amount-label"
                      aria-hidden="true"
                    >
                      <span className="text-truncate text-sans-serif">
                        ₦400K
                      </span>
                    </label>
                  </div>
                  <div
                    className="suggestion-amount"
                    data-qa="suggested-amount-button"
                  >
                    <input
                      type="radio"
                      id="15000000-option"
                      className="suggestion-amount-radio"
                      title="₦150K"
                      name="suggestionAmounts"
                      aria-label="₦150K donation"
                      data-tracking-element-name="suggestionButton"
                      value="15000000"
                    />
                    <label
                      for="15000000-option"
                      className="suggestion-amount-label"
                      aria-hidden="true"
                    >
                      <span className="text-truncate text-sans-serif">
                        ₦150K
                      </span>
                    </label>
                  </div>
                  <div
                    className="suggestion-amount"
                    data-qa="suggested-amount-button"
                  >
                    <input
                      type="radio"
                      id="8000000-option"
                      className="suggestion-amount-radio"
                      title="₦80K"
                      name="suggestionAmounts"
                      aria-label="₦80K donation"
                      data-tracking-element-name="suggestionButton"
                      value="8000000"
                    />
                    <label
                      for="8000000-option"
                      className="suggestion-amount-label"
                      aria-hidden="true"
                    >
                      <span className="text-truncate text-sans-serif">
                        ₦80K
                      </span>
                    </label>
                  </div>
                  <div
                    className="suggestion-amount"
                    data-qa="suggested-amount-button"
                  >
                    <input
                      type="radio"
                      id="4000000-option"
                      className="suggestion-amount-radio"
                      title="₦40K"
                      name="suggestionAmounts"
                      aria-label="₦40K donation"
                      data-tracking-element-name="suggestionButton"
                      value="4000000"
                    />
                    <label
                      for="4000000-option"
                      className="suggestion-amount-label"
                      aria-hidden="true"
                    >
                      <span className="text-truncate text-sans-serif">
                        ₦40K
                      </span>
                    </label>
                  </div>
                  <div
                    className="suggestion-amount"
                    data-qa="suggested-amount-button"
                  >
                    <input
                      type="radio"
                      id="1500000-option"
                      className="suggestion-amount-radio"
                      title="₦15K"
                      name="suggestionAmounts"
                      aria-label="₦15K donation"
                      data-tracking-element-name="suggestionButton"
                      value="1500000"
                      checked=""
                    />
                    <label
                      for="1500000-option"
                      className="suggestion-amount-label"
                      aria-hidden="true"
                    >
                      <span className="text-truncate text-sans-serif">
                        ₦15K
                      </span>
                    </label>
                  </div>
                  <div
                    className="suggestion-amount"
                    data-qa="suggested-amount-button"
                  >
                    <input
                      type="radio"
                      id="800000-option"
                      className="suggestion-amount-radio"
                      title="₦8,000"
                      name="suggestionAmounts"
                      aria-label="₦8,000 donation"
                      data-tracking-element-name="suggestionButton"
                      value="800000"
                    />
                    <label
                      for="800000-option"
                      className="suggestion-amount-label"
                      aria-hidden="true"
                    >
                      <span className="text-truncate text-sans-serif">
                        ₦8,000
                      </span>
                    </label>
                  </div>
                  {/* Suggested donation amount options */}
                </div>
                <div className="spacer-12"></div>
                {/* Custom Donation Amount Input */}
                <div
                  className="price-control-group"
                  aria-label="Donation amount"
                >
                  <div
                    className="flex-shrink-0 align-self-center me-1 body-3 text-gray-80"
                    aria-hidden="true"
                    data-qa="currency-symbol"
                  >
                    ₦
                  </div>
                  <label className="flex-grow-1">
                    <span className="sr-only">Donation amount NGN</span>
                    <input
                      className="price-control text-sans-serif"
                      autocomplete="off"
                      placeholder="Other"
                      inputmode="decimal"
                      data-qa="amount"
                      data-tracking-element-name="amountInput"
                      data-testid="price-input"
                      value="15,000"
                    />
                  </label>
                  <div className="flex-shrink-0 align-self-center p-rel">
                    <label
                      className="sr-only"
                      for="currency-4533812792886991732"
                    >
                      Donation currency NGN
                    </label>
                    <select
                      id="currency-4533812792886991732"
                      className="currency-select-control p-abs top-left bottom-right max-w-100 p-0 border-0 m-0 overflow-hidden cursor-pointer z-index-1"
                      data-qa="currency-selector"
                      data-tracking-element-name="changeCurrency"
                    ></select>
                  </div>

                  <div
                    className="d-flex align-items-center ps-3 pe-2 py-2 currency-select"
                    aria-hidden="true"
                  >
                    <span className="label-3" data-qa="selected-currency">
                      NGN
                    </span>
                    <span className="icon-slot icon-slot-16 flex-shrink-0 ms-1">
                      <span className="p-abs centered font-size-16">
                        <svg
                          fill="none"
                          height="16"
                          viewBox="0 0 16 16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon-stroke d-block"
                        >
                          <path
                            d="m4 6 4 4 4-4"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </div>

                  {/* Custom donation amount input */}
                </div>
                <div className="spacer-28"></div>
                {/* Dedicate Donation Checkbox */}
                <div className="ui-checkbox">
                  <label className="ui-checkbox-label">
                    <span className="ui-checkbox-control">
                      <input
                        type="checkbox"
                        checked={dedicateDonation}
                        onChange={handleDedicateDonationChange}
                        data-qa="tribute-give-checkbox"
                        data-tracking-element-name="tributeCheckbox"
                      />
                      <span className="ui-checkbox-icon"></span>
                    </span>
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
                      for="designation-7493619203107649626"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="spacer-40"></div>
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
            </form>
          </div>
          {/* Flow Footer */}
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
    </>
  );
};

export default CreditCardDonation;

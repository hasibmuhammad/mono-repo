const Pricing = () => {
  return (
    <div className="bg-hb-1 py-20">
      <div className="px-4 md:px-0 flex justify-center items-center">
        <div className="text-center">
          <button className="bg-bg-3 text-primary px-3 py-1 rounded-full text-sm">
            Pricing plans
          </button>
          <h1 className="mt-4 text-hc-2 text-3xl md:text-5xl font-semibold">
            Let’s Get Started. <br /> We’ve got a Plan that’s perfect for you.{" "}
          </h1>
          <p className="mt-6 text-hc-3 text-base md:text-xl">
            Simple, transparent pricing that grows with you. Try any plan free
            for 30 days.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-between items-center max-w-[339px] w-full h-12 mx-auto bg-hb-3 rounded-lg p-1">
          <button className="text-color-5 font-semibold px-12 py-2">
            Monthly
          </button>
          <button className="bg-white text-color-5 font-semibold px-14 py-2 rounded-lg">
            Yearly
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-8 mt-14">
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-8">
          {/* plans */}
          <div className="bg-white rounded-2xl border max-w-[384px] w-full">
            <div>
              <div className="pt-8">
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 bg-hb-1 rounded-full flex justify-center items-center">
                    <div className="w-7 h-7 bg-hc-1 rounded-full flex items-center justify-center">
                      <img src="/images/pricing/zap.svg" />
                    </div>
                  </div>
                </div>
                <h3 className="mt-5 text-center text-primary text-lg font-semibold">
                  Pay As You Go
                </h3>
                <h1 className="mt-2 text-center font-semibold text-2xl md:text-4xl text-color-5">
                  10%
                </h1>
                <p className="mt-2 text-center text-color-4">
                  10% from your customer payment
                </p>
              </div>

              <div className="p-8">
                <div className="text-color-4 space-y-4">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-hc-1 rounded-full flex justify-center items-center">
                      <img src="/images/pricing/right.svg" alt="Tick" />
                    </div>
                    <p>Only pre-paid booking</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-hc-1 rounded-full flex justify-center items-center">
                      <img src="/images/pricing/right.svg" alt="Tick" />
                    </div>
                    <p>Both practitioner and Organization</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-hc-1 rounded-full flex justify-center items-center">
                      <img src="/images/pricing/right.svg" alt="Tick" />
                    </div>
                    <p>Up to 5 practitioners in organization</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-hc-1 rounded-full flex justify-center items-center">
                      <img src="/images/pricing/right.svg" alt="Tick" />
                    </div>
                    <p>2 staff members are allowed</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-hc-1 rounded-full flex justify-center items-center">
                      <img src="/images/pricing/right.svg" alt="Tick" />
                    </div>
                    <p>Basic chat and email support</p>
                  </div>
                </div>
              </div>

              <div className="bg-hb-5 p-8 rounded-b-2xl">
                <button className="text-white bg-primary w-full rounded-lg py-3">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* plans */}
          <div className="bg-white rounded-2xl border max-w-[384px] w-full">
            <div>
              <div className="pt-8">
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 bg-hb-1 rounded-full flex justify-center items-center">
                    <div className="w-7 h-7 bg-hc-1 rounded-full flex items-center justify-center">
                      <img src="/images/pricing/2-layers.svg" />
                    </div>
                  </div>
                </div>
                <h3 className="mt-5 text-center text-primary text-lg font-semibold">
                  Practitioner
                </h3>
                <h1 className=" mt-2 text-center font-semibold text-2xl md:text-4xl text-color-5">
                  <sub>$</sub>49
                </h1>
                <p className="mt-2 text-center text-color-4">
                  1 practitioner license/monthly
                </p>
              </div>

              <div className="p-8">
                <div className="text-color-4 space-y-4">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-hc-1 rounded-full flex justify-center items-center">
                      <img src="/images/pricing/right.svg" alt="Tick" />
                    </div>
                    <p>All booking options</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-hc-1 rounded-full flex justify-center items-center">
                      <img src="/images/pricing/right.svg" alt="Tick" />
                    </div>
                    <p>All schedule Feature</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-hc-1 rounded-full flex justify-center items-center">
                      <img src="/images/pricing/right.svg" alt="Tick" />
                    </div>
                    <p>Individual single practitioner license</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-hc-1 rounded-full flex justify-center items-center">
                      <img src="/images/pricing/right.svg" alt="Tick" />
                    </div>
                    <p>3 staff members are allowed</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-hc-1 rounded-full flex justify-center items-center">
                      <img src="/images/pricing/right.svg" alt="Tick" />
                    </div>
                    <p>Unlimited email marketing</p>
                  </div>
                </div>
              </div>

              <div className="bg-hb-5 p-8 rounded-b-2xl">
                <button className="text-white bg-primary w-full rounded-lg py-3">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* plans */}
          <div className="bg-white rounded-2xl border max-w-[384px] w-full">
            <div>
              <div className="pt-8">
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 bg-hb-1 rounded-full flex justify-center items-center">
                    <div className="w-7 h-7 bg-hc-1 rounded-full flex items-center justify-center">
                      <img src="/images/pricing/3-layers.svg" />
                    </div>
                  </div>
                </div>
                <h3 className="mt-5 text-center text-primary text-lg font-semibold">
                  Pay As You Go
                </h3>
                <h1 className="mt-2 text-center font-semibold text-2xl md:text-4xl text-color-5">
                  <sub>$</sub>39
                </h1>
                <p className="mt-2 text-center text-color-4 flex gap-1 justify-center items-center">
                  Practitioner Number
                  <input
                    className="w-10 bg-hc-1 px-1"
                    type="number"
                    name=""
                    value={10}
                    id=""
                  />
                </p>
              </div>

              <div className="p-8">
                <div className="text-color-4 space-y-4">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-hc-1 rounded-full flex justify-center items-center">
                      <img src="/images/pricing/right.svg" alt="Tick" />
                    </div>
                    <p>All booking options</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-hc-1 rounded-full flex justify-center items-center">
                      <img src="/images/pricing/right.svg" alt="Tick" />
                    </div>
                    <p>Only for Organization</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-hc-1 rounded-full flex justify-center items-center">
                      <img src="/images/pricing/right.svg" alt="Tick" />
                    </div>
                    <p> Unlimited practitioners and staff</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-hc-1 rounded-full flex justify-center items-center">
                      <img src="/images/pricing/right.svg" alt="Tick" />
                    </div>
                    <p>Customizable 6 page website</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-hc-1 rounded-full flex justify-center items-center">
                      <img src="/images/pricing/right.svg" alt="Tick" />
                    </div>
                    <p>E-commerce functionality</p>
                  </div>
                </div>
              </div>

              <div className="bg-hb-5 p-8 rounded-b-2xl">
                <button className="text-white bg-primary w-full rounded-lg py-3">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

const CallToAction = () => {
  return (
    <div className="max-w-7xl mx-auto w-full px-8 my-20">
      <div className="bg-hb-1 p-4 lg:p-16  rounded-2xl flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between">
        <div className="space-y-4">
          <h1 className="text-primary font-semibold text-xl md:text-3xl">
            Start your 30-day free trial
          </h1>
          <p className="text-primary text-base md:text-xl">
            Join over 100+ practitioner and organization already growing with
            Ambel
          </p>
        </div>

        <div className="flex justify-center items-center gap-3">
          <button className="bg-white border border-border px-3 md:px-5 py-2 md:py-3 rounded-lg text-color-6 text-nowrap">
            Learn More
          </button>
          <button className="bg-primary px-3 md:px-5 py-2 md:py-3 text-white font-semibold rounded-lg text-nowrap">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

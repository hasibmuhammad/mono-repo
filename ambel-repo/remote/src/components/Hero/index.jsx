const Hero = () => {
  return (
    <div className="max-w-[1078px] w-full mx-auto my-6">
      <div className="bg-hero py-10 px-4 md:px-0">
        <h1 className="text-color-2 font-extrabold text-3xl md:text-5xl text-center max-w-4xl w-full mx-auto md:leading-[60px]">
          Looking for a{" "}
          <span className="text-color-7">Business Solution for</span>{" "}
          appointments?
        </h1>
        <p className="my-7 text-color-3 text-center max-w-4xl mx-auto w-full">
          Ambel simplifies business management by providing tools for scheduling
          appointments, managing bookkeeping, accepting payments, sharing
          resources with customers, sending reminders, and running email
          marketing campaigns.
        </p>

        <div className="flex gap-1 md:gap-7 justify-center items-center">
          <button className="bg-primary text-white px-4 py-2 rounded-md">
            Start A Free Trial
          </button>
          <button className="bg-color-8 text-white flex items-center px-4 py-2 gap-2 rounded-md">
            <img src="/images/search.svg" alt="Search" />
            Find Professionals
          </button>
        </div>
        <div className="relative mt-7 max-w-[366px] mx-auto w-full flex gap-7 items-center">
          <button className="bg-bg-3 px-2 py-1 rounded-[16px] text-color-9 text-xs flex items-center justify-center gap-[6px]">
            <img src="/images/success.svg" alt="Success" />
            No credit card required
          </button>
          <button className="bg-bg-3 px-2 py-1 rounded-[16px] text-color-9 text-xs flex items-center justify-center gap-[6px]">
            <img src="/images/success.svg" alt="Success" />
            Try one month for free
          </button>
          <div className="hidden md:block absolute -top-12 -left-16">
            <img src="./images/pointing.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

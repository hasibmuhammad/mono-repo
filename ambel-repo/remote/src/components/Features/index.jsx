const Features = () => {
  return (
    <div className="bg-primary">
      <div className="py-[69px] px-4 md:px-0">
        <h3 className="mt-3 text-color-11 font-semibold text-center">
          Features
        </h3>
        <h1 className="text-white max-w-4xl w-full mx-auto text-center font-semibold text-2xl md:text-4xl">
          Solve all your needs with a single software solution
        </h1>
        <p className="mt-5 text-white max-w-2xl mx-auto w-full text-center text-xl">
          This platform streamlines the entire customer management process,
          saving businesses time and increasing efficiency. Trusted by over 60+
          businesses.
        </p>

        {/* features */}
        <div className="max-w-[1296px] mx-auto w-full  text-white mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4 lg:gap-8">
          <div className="cursor-pointer max-w-[320px] w-full min-h-[220px] h-full px-5 py-8 rounded-[20px] bg-secondary hover:border hover:shadow-ambel-2">
            <div className="flex justify-between">
              <img src="./images/features/calendar.svg" alt="Calendar" />
              <img src="./images/features/link.svg" alt="Link" />
            </div>
            <div className="space-y-2 mt-5">
              <h3 className="text-xl font-semibold">Schedule & Booking</h3>
              <p className="max-w-[263px] w-full  leading-[24px] text-white/90">
                Create, schedule and send your clients to your Ambel booking
                page, where they can book on any device.
              </p>
            </div>
          </div>

          <div className="cursor-pointer max-w-[320px] w-full min-h-[220px] h-full px-5 py-8 rounded-[20px] bg-secondary hover:border hover:shadow-ambel-2">
            <div className="flex justify-between">
              <img src="./images/features/consult.svg" alt="Consult" />
              <img src="./images/features/link.svg" alt="Link" />
            </div>
            <div className="space-y-2 mt-5">
              <h3 className="text-xl font-semibold">Live Consultant</h3>
              <p className="max-w-[263px] w-full  leading-[24px] text-white/90">
                Integrate meet, zoom and loom to communicate with your customers
                or clients in via video conference.
              </p>
            </div>
          </div>

          <div className="cursor-pointer max-w-[320px] w-full min-h-[220px] h-full px-5 py-8 rounded-[20px] bg-secondary hover:border hover:shadow-ambel-2">
            <div className="flex justify-between">
              <img src="./images/features/payment.svg" alt="Payment" />
              <img src="./images/features/link.svg" alt="Link" />
            </div>
            <div className="space-y-2 mt-5">
              <h3 className="text-xl font-semibold">Payments</h3>
              <p className="max-w-[263px] w-full  leading-[24px] text-white/90">
                Send custom invoices, take POS and cash payment also accept
                credit or debit card payment from anywhere.
              </p>
            </div>
          </div>

          <div className="cursor-pointer max-w-[320px] w-full min-h-[220px] h-full px-5 py-8 rounded-[20px] bg-secondary hover:border hover:shadow-ambel-2">
            <div className="flex justify-between">
              <img src="./images/features/target.svg" alt="target" />
              <img src="./images/features/link.svg" alt="Link" />
            </div>
            <div className="space-y-2 mt-5">
              <h3 className="text-xl font-semibold">Customer Tracking</h3>
              <p className="max-w-[263px] w-full  leading-[24px] text-white/90">
                Manage customer, send marketing email and message, create,
                records and track via note, case study.
              </p>
            </div>
          </div>

          <div className="cursor-pointer max-w-[320px] w-full min-h-[220px] h-full px-5 py-8 rounded-[20px] bg-secondary hover:border hover:shadow-ambel-2">
            <div className="flex justify-between">
              <img
                src="./images/features/notification.svg"
                alt="notification"
              />
              <img src="./images/features/link.svg" alt="Link" />
            </div>
            <div className="space-y-2 mt-5">
              <h3 className="text-xl font-semibold">Notification</h3>
              <p className="max-w-[263px] w-full  leading-[24px] text-white/90">
                Automatically notify your clients and practitioners with
                reminder vis SMS and email by single setup.
              </p>
            </div>
          </div>
          <div className="cursor-pointer max-w-[320px] w-full min-h-[220px] h-full px-5 py-8 rounded-[20px] bg-secondary hover:border hover:shadow-ambel-2">
            <div className="flex justify-between">
              <img src="./images/features/website.svg" alt="website" />
              <img src="./images/features/link.svg" alt="Link" />
            </div>
            <div className="space-y-2 mt-5">
              <h3 className="text-xl font-semibold">Website Builder</h3>
              <p className="max-w-[263px] w-full  leading-[24px] text-white/90">
                Get a free website, design and customize your booking website
                for your business without any code.
              </p>
            </div>
          </div>
          <div className="cursor-pointer max-w-[320px] w-full min-h-[220px] h-full px-5 py-8 rounded-[20px] bg-secondary hover:border hover:shadow-ambel-2">
            <div className="flex justify-between">
              <img src="./images/features/report.svg" alt="report" />
              <img src="./images/features/link.svg" alt="Link" />
            </div>
            <div className="space-y-2 mt-5">
              <h3 className="text-xl font-semibold">Reports</h3>
              <p className="max-w-[263px] w-full  leading-[24px] text-white/90">
                Powerful data and graphs at your fingertips to monitor day to
                day activities and generate reports.
              </p>
            </div>
          </div>
          <div className="cursor-pointer max-w-[320px] w-full min-h-[220px] h-full px-5 py-8 rounded-[20px] bg-secondary hover:border hover:shadow-ambel-2">
            <div className="flex justify-between">
              <img src="./images/features/resources.svg" alt="resources" />
              <img src="./images/features/link.svg" alt="Link" />
            </div>
            <div className="space-y-2 mt-5">
              <h3 className="text-xl font-semibold">Resources</h3>
              <p className="max-w-[263px] w-full  leading-[24px] text-white/90">
                Create and share resources like Prescriptions, Documentations,
                Medical Charts and Videos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

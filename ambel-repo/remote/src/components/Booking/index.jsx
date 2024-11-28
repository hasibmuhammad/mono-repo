const Booking = () => {
  return (
    <section>
      <div>
        <div className="px-4 md:px-0 sticky top-32 max-w-[1260px] md:h-[480px] h-auto  mt-14 mx-auto w-full bg-white md:shadow-ambel-5 md:rounded-[32px]">
          <div className="p-8">
            <h1 className="max-w-[789px] w-full mx-auto text-2xl md:text-4xl md:leading-[54px] text-color-6 text-center font-semibold">
              Find and Book Appointments with Local and International
              Professionals
            </h1>
            <div className="mt-[26px] max-w-[1160px] py-9 md:px-16 w-full mx-auto">
              <form>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <div className="relative max-w-[480px] w-full">
                    <img
                      className="absolute top-[11px] left-2"
                      src="/images/inputsearch.svg"
                      alt="Search"
                    />
                    <input
                      type="text"
                      placeholder="Search Doctor, Therapist, Consultant, Spa"
                      className="w-full border border-border rounded-full py-[10px] pl-10 pr-[10px] outline-none"
                    />
                  </div>
                  <div className="relative max-w-[414px] w-full">
                    <img
                      className="absolute top-[11px] left-2"
                      src="/images/location.svg"
                      alt="Location"
                    />
                    <input
                      type="text"
                      placeholder="Select your location"
                      className="w-full border border-border rounded-full py-[10px] pl-10 pr-[10px] outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-bg-1 px-5 py-[10px] rounded-full"
                  >
                    Search
                  </button>
                </div>
              </form>

              <div className="mt-8">
                <p className="text-color-6">Are you looking for</p>
                <div className="my-5">
                  <div className="font-medium flex items-center justify-center gap-3 text-nowrap flex-wrap lg:flex-nowrap">
                    <button className="hover:text-color-13 text-color-6  bg-bg-4 flex items-center justify-center px-3 py-[6px] rounded-full gap-2">
                      <span>Doctor</span>
                      <img src="/images/x.svg" alt="Close Icon" />
                    </button>
                    <button className="hover:text-color-13 text-color-6  bg-bg-4 flex items-center justify-center px-3 py-[6px] rounded-full gap-2">
                      <span>Lawyer</span>
                      <img src="/images/x.svg" alt="Close Icon" />
                    </button>
                    <button className="hover:text-color-13 text-color-6  bg-bg-4 flex items-center justify-center px-3 py-[6px] rounded-full gap-2">
                      <span>Therapist</span>
                      <img src="/images/x.svg" alt="Close Icon" />
                    </button>
                    <button className="hover:text-color-13 text-color-6  bg-bg-4 flex items-center justify-center px-3 py-[6px] rounded-full gap-2">
                      <span>Barbar</span>
                      <img src="/images/x.svg" alt="Close Icon" />
                    </button>
                    <button className="hover:text-color-13 text-color-6  bg-bg-4 flex items-center justify-center px-3 py-[6px] rounded-full gap-2">
                      <span>Spa</span>
                      <img src="/images/x.svg" alt="Close Icon" />
                    </button>
                    <button className="hover:text-color-13 text-color-6  bg-bg-4 flex items-center justify-center px-3 py-[6px] rounded-full gap-2">
                      <span>Med Spa</span>
                      <img src="/images/x.svg" alt="Close Icon" />
                    </button>
                    <button className="hover:text-color-13 text-color-6  bg-bg-4 flex items-center justify-center px-3 py-[6px] rounded-full gap-2">
                      <span>Psychiatrist</span>
                      <img src="/images/x.svg" alt="Close Icon" />
                    </button>
                    <button className="hover:text-color-13 text-color-6  bg-bg-4 flex items-center justify-center px-3 py-[6px] rounded-full gap-2">
                      <span>Consultancy firm</span>
                      <img src="/images/x.svg" alt="Close Icon" />
                    </button>
                    <button className="px-2 py-[6px] hover:text-color-13 text-color-12 rounded-md bg-bg-5">
                      More
                    </button>
                    <div>
                      <button className="p-1 hover:text-color-13 text-color-12 rounded-md bg-bg-5">
                        <img src="./images/filter.svg" alt="Filter" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="mt-8 text-center text-bg-1 font-medium text-sm flex items-center justify-center">
                Explore Advanced Search
                <img src="/images/arrow.svg" />
              </h3>
            </div>
          </div>
        </div>

        <div className="sticky top-32 mt-10 max-w-[1260px] md:h-[480px] h-auto  mx-auto w-full rounded-[32px] bg-card-1">
          <div className="px-4 md:px-14 flex flex-col py-7 md:flex-row justify-center gap-6 items-center">
            <div className="text-white space-y-9">
              <h1 className="text-2xl md:text-4xl font-semibold">
                One brand in one easy to use system, across all your locations
              </h1>
              <p>
                Give customers a consistent brand experience, online and in
                person. With one source for all your business information,
                you&apos;ll unify your guest data, business operations,
                marketing efforts, and more from one login area.
              </p>
              <p className="underline flex gap-[10px] text-sm">
                Learn more
                <img src="/images/learnmore.svg" alt="Pointer" />
              </p>
            </div>
            <div className="flex-shrink-0">
              <img src="/images/cards/1.svg" alt="Location" />
            </div>
          </div>
        </div>

        <div className="sticky top-32 mt-10 max-w-[1260px] md:h-[480px] h-auto  mx-auto w-full rounded-lg md:rounded-[32px] bg-card-2">
          <div className="px-4 md:px-14 flex flex-col py-7 md:flex-row justify-center gap-6 items-center">
            <div className="text-white space-y-9">
              <h1 className="text-2xl md:text-4xl font-semibold">
                Invite unlimited team members and assign custom roles and
                permissions
              </h1>
              <p>
                This feature enables organizations to efficiently manage team
                members across one or multiple locations. Roles can be assigned
                and customized to control access, ensuring that team members
                only view or edit information and resources relevant to their
                roles.
              </p>
              <p className="underline flex gap-[10px] text-sm">
                Learn more
                <img src="/images/learnmore.svg" alt="Pointer" />
              </p>
            </div>
            <div className="flex-shrink-0">
              <img src="/images/cards/2.svg" alt="Location" />
            </div>
          </div>
        </div>

        <div className="sticky top-32 mt-10 max-w-[1260px] md:h-[480px] h-auto  mx-auto w-full rounded-lg md:rounded-[32px] bg-card-3">
          <div className="px-4 md:px-14 flex flex-col py-7 md:flex-row justify-center gap-6 items-center">
            <div className="text-white space-y-9">
              <h1 className="text-2xl md:text-4xl font-semibold">
                Securely manage and organize payments: Cash, Debit, Credit
              </h1>
              <p>
                Customers can securely payment via online credit, debit card, In
                person POS, Tap to pay and in app wallet. Also can record of
                cash and other gateway payment for reporting. Ambel integrates
                with gateways like Stripe, Clover, Square, and PayPal, providing
                comprehensive support for all your accounting and bookkeeping
                needs.
              </p>
              <p className="underline flex gap-[10px] text-sm">
                See all payment options
                <img src="/images/learnmore.svg" alt="Pointer" />
              </p>
            </div>
            <div className="flex-shrink-0">
              <img src="/images/cards/3.svg" alt="Location" />
            </div>
          </div>
        </div>

        <div className="sticky top-32 mt-10 max-w-[1260px] md:h-[480px] h-auto  mx-auto w-full rounded-lg md:rounded-[32px] bg-card-4">
          <div className="px-4 md:px-14 flex flex-col py-7 md:flex-row justify-center gap-6 items-center">
            <div className="text-black space-y-9">
              <h1 className="text-2xl md:text-4xl font-semibold">
                Third party apps Integrations tailored your business
              </h1>
              <p>
                Connect tools like Google Meet, Zoom, Loom, Zapier, Zendesk, and
                WhatsApp to streamline operations. Ambel also integrates with
                payment gateways such as Stripe, PayPal, Clover, and Square,
                allowing you to access all features in one convenient platform.
              </p>
              <p className="underline flex gap-[10px] text-sm">
                See all Integration
                <img src="/images/cards/linkblack.svg" alt="Pointer" />
              </p>
            </div>
            <div className="flex-shrink-0">
              <img src="/images/cards/4.svg" alt="Location" />
            </div>
          </div>
        </div>

        <div className="sticky top-32 mt-10 max-w-[1260px] md:h-[480px] h-auto  mx-auto w-full rounded-lg md:rounded-[32px] bg-card-5">
          <div className="px-4 md:px-14 flex flex-col py-7 md:flex-row justify-center gap-6 items-center">
            <div className="text-black space-y-9">
              <h1 className="text-2xl md:text-4xl font-semibold">
                Create a free website and start selling your products online.
              </h1>
              <p>
                With our Online Shop and Inventory Management System, you can
                easily manage inventory, streamline e-commerce operations, and
                provide an exceptional shopping experience for your customers.
                Enjoy full e-commerce functionality to manage products, orders,
                and inventory seamlessly.
              </p>
              <p className="underline flex gap-[10px] text-sm">
                Learn more
                <img src="/images/cards/linkblack.svg" alt="Pointer" />
              </p>
            </div>
            <div className="flex-shrink-0">
              <img src="/images/cards/5.svg" alt="Location" />
            </div>
          </div>
        </div>

        <div className="sticky top-32 mt-10 max-w-[1260px] md:h-[480px] h-auto  mx-auto w-full rounded-lg md:rounded-[32px] bg-card-6">
          <div className="px-4 md:px-14 flex flex-col py-7 md:flex-row justify-center gap-6 items-center">
            <div className="text-white space-y-9">
              <h1 className="text-2xl md:text-4xl font-semibold">
                Boost Sales with Gift Cards, Packages, and Memberships
              </h1>
              <p>
                Enhance customer loyalty and increase revenue by offering gift
                cards for easy gifting, tailored packages that add value, and
                membership programs that reward repeat purchases. These options
                attract new customers, encourage larger purchases, and build a
                loyal customer base.
              </p>
              <p className="underline flex gap-[10px] text-sm">
                Learn more
                <img src="/images/learnmore.svg" alt="Pointer" />
              </p>
            </div>
            <div className="flex-shrink-0">
              <img src="/images/cards/6.svg" alt="Location" />
            </div>
          </div>
        </div>
        <div className="sticky top-32 mt-10 max-w-[1260px] md:h-[480px] h-auto  mx-auto w-full rounded-lg md:rounded-[32px] bg-card-7">
          <div className="px-4 md:px-14 flex flex-col py-7 md:flex-row justify-center gap-6 items-center">
            <div className="text-white space-y-9">
              <h1 className="text-2xl md:text-4xl font-semibold">
                Boost Sales with Gift Cards, Packages, and Memberships
              </h1>
              <p>
                Enhance customer loyalty and increase revenue by offering gift
                cards for easy gifting, tailored packages that add value, and
                membership programs that reward repeat purchases. These options
                attract new customers, encourage larger purchases, and build a
                loyal customer base.
              </p>
              <p className="underline flex gap-[10px] text-sm">
                Learn more
                <img src="/images/learnmore.svg   " alt="Pointer" />
              </p>
            </div>
            <div className="flex-shrink-0">
              <img src="/images/cards/7.svg" alt="Location" />
            </div>
          </div>
        </div>

        <div className="sticky top-32 mt-10 max-w-[1260px] md:h-[480px] h-auto  mx-auto w-full rounded-lg md:rounded-[32px] bg-card-8">
          <div className="px-4 md:px-14 flex flex-col py-7 md:flex-row justify-center gap-6 items-center">
            <div className="text-black space-y-9">
              <h1 className="text-2xl md:text-4xl font-semibold">
                Unlimited SMS and Email Reminders, Notifications, and Marketing
              </h1>
              <p>
                Stay connected with your customers effortlessly with unlimited
                SMS and email options. Send reminders for upcoming bookings,
                real-time notifications, and targeted marketing emails to keep
                your audience engaged and informed, all without limits. Boost
                customer satisfaction and retention while promoting your brand
                effectively via your own business email.
              </p>
              <p className="underline flex gap-[10px] text-sm">
                Learn more
                <img src="/images/cards/linkblack.svg" alt="Pointer" />
              </p>
            </div>
            <div className="flex-shrink-0">
              <img src="/images/cards/8.svg" alt="Location" />
            </div>
          </div>
        </div>

        <div className="sticky top-32 mt-10 max-w-[1260px] md:h-[480px] h-auto  mx-auto w-full rounded-lg md:rounded-[32px] bg-primary">
          <div className="px-4 md:px-14 flex flex-col py-7 md:flex-row justify-center gap-6 items-center">
            <div className="text-white space-y-9">
              <h1 className="text-2xl md:text-4xl font-semibold">
                Create an Attractive and Customized Booking Page with your own
                domain
              </h1>
              <p>
                Give your customers a seamless booking experience by
                personalizing your booking page. Customize colors, layout, and
                branding to reflect your business’s unique style, and add
                features like easy navigation, clear time slots, and engaging
                visuals to make booking effortless and enjoyable. Even build own
                website with custom domain.
              </p>
              <p className="underline flex gap-[10px] text-sm">
                Learn more
                <img src="/images/learnmore.svg" alt="Pointer" />
              </p>
            </div>
            <div className="flex-shrink-0">
              <img src="/images/cards/9.svg" alt="Location" />
            </div>
          </div>
        </div>

        <div className="sticky top-32 mt-10 max-w-[1260px] md:h-[480px] h-auto  mx-auto w-full rounded-lg md:rounded-[32px] bg-card-9">
          <div className="px-4 md:px-14 flex flex-col py-7 md:flex-row justify-center gap-6 items-center">
            <div className="text-black space-y-9">
              <h1 className="text-2xl md:text-4xl font-semibold">
                Streamline Daily Operations with E-Forms, Prescriptions, and Med
                Charts
              </h1>
              <p>
                Digitize and organize your daily tasks efficiently with our
                all-in-one platform. Use customizable E-forms for patient intake
                and documentation, generate prescriptions instantly for seamless
                medication management, and maintain accurate med charts to
                monitor patient treatment plans. Simplify workflows, reduce
                paperwork, and ensure accurate, secure record-keeping for
                enhanced operational efficiency and patient care.
              </p>
              <p className="underline flex gap-[10px] text-sm">
                Learn more
                <img src="/images/cards/linkblack.svg" alt="Pointer" />
              </p>
            </div>
            <div className="flex-shrink-0">
              <img src="/images/cards/10.svg" alt="Location" />
            </div>
          </div>
        </div>

        <div className="sticky top-32 mt-10 max-w-[1260px] md:h-[480px] h-auto  mx-auto w-full rounded-lg md:rounded-[32px] bg-card-10">
          <div className="px-4 md:px-14 flex flex-col py-7 md:flex-row justify-center gap-6 items-center">
            <div className="text-black space-y-9">
              <h1 className="text-2xl md:text-4xl font-semibold">
                Comprehensive Dashboard with Real-Time Data Insights
              </h1>
              <p>
                Access a powerful dashboard with real-time data visualization to
                monitor key metrics, track performance, and make instant,
                informed decisions. Gain valuable insights with dynamic charts
                and analytics, all in one intuitive interface.
              </p>
              <p className="underline flex gap-[10px] text-sm">
                Learn more
                <img src="/images/cards/linkblack.svg" alt="Pointer" />
              </p>
            </div>
            <div className="flex-shrink-0">
              <img src="/images/cards/11.svg" alt="Dashboard" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 max-w-[1113px] w-full mx-auto flex gap-4 justify-center items-center flex-wrap">
        <p className="text-lg text-color-5">Replace:</p>
        <button className="text-color-14 bg-bg-6 px-2 py-1 rounded-full font-medium">
          Jane
        </button>
        <button className="text-color-14 bg-bg-6 px-2 py-1 rounded-full font-medium">
          Calendly
        </button>
        <button className="text-color-14 bg-bg-6 px-2 py-1 rounded-full font-medium">
          Cal.com
        </button>
        <button className="text-color-14 bg-bg-6 px-2 py-1 rounded-full font-medium">
          acuity
        </button>
        <button className="text-color-14 bg-bg-6 px-2 py-1 rounded-full font-medium">
          Square appointment
        </button>
        <button className="text-color-14 bg-bg-6 px-2 py-1 rounded-full font-medium">
          Simplybook.me
        </button>
        <button className="text-color-14 bg-bg-6 px-2 py-1 rounded-full font-medium">
          Zenoti
        </button>
        <button className="text-color-14 bg-bg-6 px-2 py-1 rounded-full font-medium">
          Appointy
        </button>
        <button className="text-color-14 bg-bg-6 px-2 py-1 rounded-full font-medium">
          Set More
        </button>
        <button className="text-color-14 bg-bg-6 px-2 py-1 rounded-full font-medium">
          Honey Book
        </button>
      </div>
    </section>
  );
};

export default Booking;

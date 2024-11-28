const Faq = () => {
  return (
    <div className="my-20 max-w-7xl mx-auto w-full">
      <div className="px-8 max-w-[768px] w-full space-y-5">
        <div className="space-y-3">
          <p className="text-primary font-semibold">Support</p>
          <h1 className="text-color-5 text-2xl md:text-4xl font-semibold">
            Frequently asked questions
          </h1>
        </div>
        <p className="text-color-4 text-base md:text-xl">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please{" "}
          <span className="border-b">chat to our friendly team.</span>
        </p>
      </div>

      <div className="my-16 px-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 items-center">
          <div className="max-w-[560px] w-full space-y-12">
            {/* item */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-hb-4 w-12 h-12 rounded-full flex justify-center items-center">
                <img src="/images/faq/heart.svg" alt="Heart" />
              </div>
              <div className="space-y-2">
                <h3 className="text-color-5 text-lg font-semibold">
                  Is there a free trial available?
                </h3>
                <p className="text-color-4">
                  Yes, you can try us for free for 30 days. Our friendly team
                  will work with you to get you up and running as soon as
                  possible.
                </p>
              </div>
            </div>
            {/* item */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-hb-4 w-12 h-12 rounded-full flex justify-center items-center">
                <img src="/images/faq/refresh.svg" alt="Refresh" />
              </div>
              <div className="space-y-2">
                <h3 className="text-color-5 text-lg font-semibold">
                  Can I change my plan later?
                </h3>
                <p className="text-color-4">
                  Of course, you can change your plan anytime you want. You can
                  also upgrade or downgrade your plan.
                </p>
              </div>
            </div>

            {/* item */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-hb-4 w-12 h-12 rounded-full flex justify-center items-center">
                <img src="/images/faq/group.svg" alt="FAQ" />
              </div>
              <div className="space-y-2">
                <h3 className="text-color-5 text-lg font-semibold">
                  May I need to pay full amount while I update plan in the
                  middle of the month?
                </h3>
                <p className="text-color-4">
                  No you don’t need to pay the full amount if you update the
                  practitioner number. Just pay for available days from the next
                  renew.
                </p>
              </div>
            </div>
            {/* item */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-hb-4 w-12 h-12 rounded-full flex justify-center items-center">
                <img src="/images/faq/refresh2.svg" alt="Refresh" />
              </div>
              <div className="space-y-2">
                <h3 className="text-color-5 text-lg font-semibold">
                  Can I disable the auto renew?
                </h3>
                <p className="text-color-4">
                  You can disable and enable auto renew anytime also you can
                  choose auto renew from different options.
                </p>
              </div>
            </div>
            {/* item */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-hb-4 w-12 h-12 rounded-full flex justify-center items-center">
                <img src="/images/faq/slash.svg" alt="Slash" />
              </div>
              <div className="space-y-2">
                <h3 className="text-color-5 text-lg font-semibold">
                  What is your cancellation policy?
                </h3>
                <p className="text-color-4">
                  We understand that things change. You can cancel your plan at
                  any time and we’ll refund you the difference already paid.
                </p>
              </div>
            </div>
            {/* item */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-hb-4 w-12 h-12 rounded-full flex justify-center items-center">
                <img src="/images/faq/plus-circle.svg" alt="Plus Circle" />
              </div>
              <div className="space-y-2">
                <h3 className="text-color-5 text-lg font-semibold">
                  Can I run my business Pay As You Go for lifetime
                </h3>
                <p className="text-color-4">
                  Yes, you can run your business lifetime with Pay As You Go. No
                  additional charges will taken for your plan.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src="./images/rightImage.png" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

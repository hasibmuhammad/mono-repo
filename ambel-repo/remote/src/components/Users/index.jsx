const Users = () => {
  return (
    <div className="mt-[107px] mb-10 px-4 md:px-0">
      <div className="space-y-6">
        <h3 className="text-center text-color-10 font-semibold">Industries</h3>
        <h2 className="text-color-5 text-2xl md:text-4xl font-bold max-w-2xl text-center mx-auto w-full">
          Popular Businesses and Practitioners who use Ambel
        </h2>
      </div>
      <p className="mt-5 text-color-3 text-xl max-w-5xl text-center mx-auto w-full">
        Our platform supports a diverse range of professionals, with popular
        industries; including: healthcare providers, medi spas, salons , fitness
        coaches, law agencies, beauty specialists, consultants, and therapists.
      </p>

      <div className="font-semibold p-[2px] my-12 max-w-[907px] w-full min-h-[44px] h-full mx-auto md:shadow-ambel-4 md:border md:border-border md:rounded-[29px] flex flex-wrap items-center justify-center md:justify-start gap-2">
        <button className="bg-primary text-white rounded-[45px] px-6 py-2">
          Doctor
        </button>
        <button className="text-color-6 px-6 py-2">Lawyer</button>
        <button className="text-color-6 px-6 py-2">Spa & Salon</button>
        <button className="text-color-6 px-6 py-2">Therapist</button>
        <button className="text-color-6 px-6 py-2">Fitness</button>
        <button className="text-color-6 px-6 py-2">Instructor</button>
        <button className="text-color-6 px-6 py-2">Consultancy</button>
      </div>
      <div className="max-w-[1310px] w-full mx-auto flex flex-wrap gap-[21px] justify-center">
        <div className="bg-primary rounded-2xl max-w-[524px] w-full flex justify-between items-center">
          <div className="py-[25px] pl-[25px] space-y-4 text-white">
            <button className="px-3 py-1 text-color-5 font-medium rounded-2xl bg-white">
              Doctor
            </button>
            <h2 className="text-2xl font-semibold max-w-[271px] w-full">
              Business solution for healthcare providers
            </h2>
            <p className="max-w-[271px] w-full text-sm">
              Our software allows Doctors and Medical Professionals to book
              appointment, manage their patients, provide online prescriptions,
              overview of their med charts and automatically send reminders for
              treatments.
            </p>
            <p className="flex items-center gap-[10px] text-sm">
              <span className="underline">Learn more</span>
              <img src="/images/learnmore.svg" alt="Learn More" />
            </p>
          </div>
          <div className="pr-[14px]">
            <img src="/images/1.png" alt="Doctor" />
          </div>
        </div>
        <div>
          <img src="/images/2.png" alt="User" />
        </div>
        <div>
          <img src="/images/3.png" alt="User" />
        </div>
        <div>
          <img src="/images/4.png" alt="User" />
        </div>
        <div>
          <img src="/images/5.png" alt="User" />
        </div>
        <div>
          <img src="/images/6.png" alt="User" />
        </div>
      </div>
    </div>
  );
};

export default Users;

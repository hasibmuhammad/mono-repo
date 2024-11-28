const Footer = () => {
  return (
    <footer className="px-4 md:px-0 mt-14 bg-primary py-8 text-white">
      <div className="max-w-[1153px] w-full mx-auto">
        <div className="flex flex-wrap gap-4 md:gap-0 justify-between">
          <div>
            <div className="space-y-[6px]">
              <h2 className="font-semibold">For Customers</h2>
              <div className="max-w-[119px] w-full border-2 border-white rounded-full"></div>
            </div>
            <div className="mt-6">
              <ul className="space-y-3">
                <li>Find a Practitioner</li>
                <li>Book an Appointment</li>
                <li>Make Payment</li>
                <li>Live Consultation</li>
                <li>Refund</li>
                <li>Shop</li>
                <li>Resources</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="space-y-[6px]">
              <h2 className="font-semibold">For Practitioners</h2>
              <div className="max-w-[133px] w-full border-2 border-white rounded-full"></div>
            </div>
            <div className="mt-6">
              <ul className="space-y-3">
                <li>Profile Setup</li>
                <li>Organization Setup</li>
                <li>Create Schedule</li>
                <li>Collaboration</li>
                <li>Withdraw</li>
                <li>Pay Staff</li>
                <li>QR Code</li>
                <li>Booking Page</li>
                <li>Business Tools</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="space-y-[6px]">
              <h2 className="font-semibold">Resources</h2>
              <div className="max-w-[85px] w-full border-2 border-white rounded-full"></div>
            </div>
            <div className="mt-6">
              <ul className="space-y-3">
                <li>Plans</li>
                <li>Blog</li>
                <li>Community</li>
                <li>FAQ</li>
                <li>Reviews</li>
                <li>Refund & Return</li>
                <li>Documentation</li>
                <li>Road Map</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="space-y-[6px]">
              <h2 className="font-semibold">Company</h2>
              <div className="max-w-[82px] w-full border-2 border-white rounded-full"></div>
            </div>
            <div className="mt-6">
              <ul className="space-y-3">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Career</li>
                <li>Support Center</li>
                <li>Affiliate Program</li>
                <li>Trust and Safety</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-8">
          <div className="flex items-center gap-9">
            <h4>Follow Us</h4>
            <div className="flex items-center gap-6">
              <div>
                <img src="/images/footer/twitter.svg" alt="Twitter" />
              </div>
              <div>
                <img src="/images/footer/linkedin.svg" alt="Linkedin" />
              </div>
              <div>
                <img src="/images/footer/fb.svg" alt="Facebook" />
              </div>
              <div>
                <img src="/images/footer/instagram.svg" alt="Instagram" />
              </div>
              <div>
                <img src="/images/footer/youtube.svg" alt="Youtube" />
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="mt-8">
          <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:justify-between items-center">
            <div className="text-center md:text-left">
              <p>Copyright &copy; 2022. Ambel. All rights reserved.</p>
            </div>
            <div className="flex items-center text-nowrap gap-5">
              <p className="cursor-pointer">Privacy Policy</p>
              <p className="cursor-pointer">Cookies</p>
              <p className="cursor-pointer">Terms of services</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

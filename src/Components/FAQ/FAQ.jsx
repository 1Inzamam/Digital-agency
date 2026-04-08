import image from "../../assets/image/FAQman.png"
const FAQ = () => {
  return (
    <div className="w-9/12 mx-auto flex flex-col-reverse xl:flex-row justify-between gap-9">
      {/* Accordion */}
      <div className="xl:w-[48%] space-y-8">
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">
            What services does your web agency offer?
          </div>
          <div className="collapse-content text-sm">
            We provide end-to-end digital solutions including custom website
            development, MERN stack applications, UI/UX design, performance
            optimization, API integration, and ongoing maintenance to ensure
            your business runs smoothly online.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Can you help with redesigning an existing website?
          </div>
          <div className="collapse-content text-sm">
            Yes, we specialize in modernizing outdated websites. We improve
            design, user experience, performance, and responsiveness while
            ensuring your brand identity and existing data remain intact.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Do you offer mobile app development services?
          </div>
          <div className="collapse-content text-sm">
            Yes, we develop scalable and user-friendly mobile applications
            tailored to your business needs, focusing on performance, clean UI,
            and seamless user experience across devices.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Do you offer fixed pricing or hourly rates?
          </div>
          <div className="collapse-content text-sm">
            We offer both flexible pricing models. Fixed pricing is available
            for well-defined projects, while hourly rates are ideal for ongoing
            or evolving requirements.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Do you offer any payment plans or financing options?
          </div>
          <div className="collapse-content text-sm">
            Yes, we offer flexible payment plans based on project size and
            duration, making it easier for clients to manage budgets without
            compromising on quality.
          </div>
        </div>
      </div>

      {/* image content */}
      {/* <div className="relative xl:w-[52%] space-y-3 text-center xl:text-start ">
        <div className="space-y-5">
          <h1 className="text-5xl font-semibold text-primary">Frequently Asked Questions</h1>
          <p className="text-[14px] font-normal text-neutral max-w-[62%] mx-auto xl:mx-0">
            These FAQs address common concerns travelers may have before
            booking. Let me know if you need more or adjustments!
          </p>
              </div>
              <img className="absolute hidden xl:block left-56 top-13" src={image} alt="" />
              
      </div> */}
      {/* image content */}
      <div className="relative xl:w-[48%] space-y-3 text-center xl:text-start">
        <div className="space-y-4 md:space-y-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-primary leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-xs xl:text-sm font-normal text-neutral max-w-full sm:max-w-[80%] xl:max-w-[63%] mx-auto xl:mx-0">
            These FAQs address common concerns travelers may have before
            booking. Let me know if you need more or adjustments!
          </p>
        </div>

        <div className="absolute hidden xl:block bottom-0 right-0 w-75">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;

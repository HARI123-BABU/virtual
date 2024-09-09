import { testimonials } from "../constants";
const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide" id="testimonials">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 tracking-wide">
        What people are saying{" "}
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="py-2 w-full sm:w-1/2 lg:w-1/3">
            <div className="flex mb-12">
              <div className=" bg-neutral-800 rounded-md border text-md border-neutral-900 font-thin m-5 p-6 w-full  ">
                <p>{testimonial.text}</p>
                <div className="flex items-start mt-8">
                  <img
                    src={testimonial.image}
                    alt={testimonial.user}
                    className="w-12 h-12 rounded-full mr-6 border border-neutral-300"
                  />
                  <div>
                    {" "}
                    <h6 className="">{testimonial.user}</h6>
                    <span className="italic font-formal text-sm text-neutral-400">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

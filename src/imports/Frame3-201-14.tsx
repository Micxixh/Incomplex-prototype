import svgPaths from "./svg-4hhdlz3hpp";
import imgFrame4 from "figma:asset/9680a2c8e775b837ff3fff3a014016d1c92d3c09.png";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative rounded-[460px] shrink-0 w-[310px] h-[320px]">
      <img
        alt=""
        className="absolute inset-0 object-cover pointer-events-none rounded-[460px] size-full"
        src={imgFrame4}
      />
    </div>
  );
}

function Icons8Linkedin() {
  return (
    <div
      className="relative shrink-0 size-[50px]"
      data-name="icons8-linkedin 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 50 50"
      >
        <g id="icons8-linkedin 1">
          <path
            d={svgPaths.p28a00100}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch hidden md:flex flex-col md:flex-row gap-[32px] md:gap-[48px] items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-col md:flex-row items-center gap-[8px]">
        <span
          className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] text-[18px] text-white uppercase"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Email:
        </span>
        <p
          className="font-['Roboto:Regular',_sans-serif] leading-[1.2] text-[18px] text-white"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Hello@InComplex.com
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-[8px]">
        <span
          className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[1.2] text-[18px] text-white uppercase"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Phone:
        </span>
        <p
          className="font-['Roboto:Regular',_sans-serif] leading-[1.2] text-[18px] text-white"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          (+44) 0208 123 8589
        </p>
      </div>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[24px] w-full"
    >
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="bg-[#00303F] border-[#00303F] text-white placeholder:text-gray-400 focus:border-[#DB4B13] transition-colors"
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="bg-[#00303F] border-[#00303F] text-white placeholder:text-gray-400 focus:border-[#DB4B13] transition-colors"
      />
      <Textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={6}
        className="bg-[#00303F] border-[#00303F] text-white placeholder:text-gray-400 focus:border-[#DB4B13] transition-colors resize-none"
      />
      <button
        type="submit"
        className="bg-[#DB4B13] hover:bg-[#B01D00] text-white text-center uppercase py-[16px] px-[32px] rounded-[8px] transition-all duration-300 font-['Roboto:SemiBold',_sans-serif] font-semibold border-[2px] border-solid border-white md:border-0"
        style={{
          fontVariationSettings: "'wdth' 100",
        }}
      >
        Send Message
      </button>
    </form>
  );
}

export default function Frame() {
  return (
    <div className="bg-[rgba(0,48,63,0)] relative rounded-[12px] size-full">
      <div
        aria-hidden="true"
        className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[12px]"
      />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[36px] items-center justify-start relative size-full py-[36px] px-[24px]">
          <div className="w-full flex items-center justify-center shrink-0">
            <Frame1 />
          </div>
          <div className="w-full max-w-[600px] flex items-center justify-center">
            <ContactForm />
          </div>
          <div className="w-full shrink-0">
            <Frame2 />
          </div>
        </div>
      </div>
    </div>
  );
}
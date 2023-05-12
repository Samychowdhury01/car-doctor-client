import { FaRegCalendarAlt, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-black py-24 rounded-lg text-white flex flex-col md:flex-row items-center justify-center gap-14 px-5">
      <div className="flex items-center gap-5">
        <FaRegCalendarAlt className="text-4xl" />
        <div>
          <p>We are open monday-friday</p>
          <h3>7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <FaPhoneAlt className="text-4xl" />
        <div>
          <p>We are open monday-friday</p>
          <h3>7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <FaMapMarkerAlt className="text-4xl text-red-600" />
        <div>
          <p>We are open monday-friday</p>
          <h3>7:00 am - 9:00 pm</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;

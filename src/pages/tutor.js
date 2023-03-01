import React, {useRef, useState, useEffect} from "react";
import Header from "../components/HomeLayout/Header";
import Footer from "../components/HomeLayout/Footer";
import { MdWork } from "react-icons/md";
import { TbCurrencyDollar } from "react-icons/tb";
import { GiGraduateCap } from "react-icons/gi";
import emailjs from '@emailjs/browser'

const Tutor = () => {
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();
  const [user_email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [location, setLocation] = useState();
  const [zip_code, setZipCode] = useState();
  const [education, setEducation] = useState();
  const [school, setSchool] = useState();
  const [about, setAbout] = useState();
  const [subject, setSubject] = useState({});
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const form = useRef();

 const sendEmail = (e) => { 
    e.preventDefault();
    setFormError(validate(first_name,last_name,user_email,phone,location,zip_code,education,school,about,subject));
    setIsSubmit(true) 


    emailjs.sendForm('service_fz1l9la', 'template_bc89d2y', form.current, 'RxF_geLGHEYY7wMTS')
      .then((result) => {
          console.log(result.text);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("")
          setLocation("")
          setZipCode("")
          setEducation("");
          setSchool("");
          setAbout("")
          setSubject("")
      }, (error) => {
          console.log(error.text);
      });
  };

  useEffect(() =>{
    console.log(formError)
    if(Object.keys(formError).length == 0 && isSubmit){
    }
  },[formError]);

  const validate = () => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!first_name){
      errors.first_name = "FirstName required!"
    }
    if(!last_name){
      errors.last_name = "LastName required!"
    }
    if(!user_email){
      errors.user_email = "Email required!"
    }else if(!regex.test(user_email)){
      errors.user_email = "This is not a valid email format"
    }
    if(!phone){
      errors.phone = "Phone number required!"
    }else if(phone.length < 11){
      errors.phone = "Phone number must be 11"
    }else if(phone.length > 11){
      errors.phone = "Phone number is invalid"
    }
    if(!location){
      errors.location = "location required!"
    }
    if(!zip_code){
      errors.zip_code = "ZipCode required!"
    }else if(zip_code.length < 6){
      errors.zip_code = "ZipCode must be 6"
    }else if(zip_code.length > 6){
      errors.zip_code = "ZipCode must not be greater than 6"
    }
    if(!education){
      errors.education = "information required!"
    }
    if(!school){
      errors.school = "School name required!"
    }
    if(!about){
      errors.about = "Information required!"
    }
    if(!subject){
      errors.subject = "Information required!"
    }

    return errors;
  }

  const items = [
    {
      icon: (
        <TbCurrencyDollar className="bg-[#FB8E42] text-white w-14 rounded-full h-14 px-3 py-2" />
      ),
      tittle: "Earn a steady income",
    },
    {
      icon: (
        <MdWork className="bg-[#233C7E] text-white w-14 rounded-full h-14 px-3 py-2" />
      ),
      tittle: "Work from anywhere",
    },
    {
      icon: (
        <GiGraduateCap className="bg-[#B84B40] text-white w-14 rounded-full h-14 px-3 py-2" />
      ),
      tittle: "Help student succeed",
    },
  ];
  return (
    <div>
      <Header />
      <div className="flex md:flex-row flex-col w-full items-center mt-40 md:mb-[-550px] mb-[-750px]">
        <div className="md:w-[70%] md:m-24 md:shadow-md md:border-2">
          <h1 className="text-3xl font-bold md:ml-5 md:mt-10 text-center md:text-left">
            Become a Tutor
          </h1>
          <p className="md:ml-5 mt-5 md:w-[90%] px-7 md:px-0 w-full text-center md:text-left">
            Please fill out the form below and submit, we will get back to you
            about tutoring with learnhall within 24-48 business hours.
          </p>
          {Object.keys(formError).length == 0 && isSubmit ? (<div className="text-yellow-400 text-[20px] text-center">Sent Successfully</div>)
          : (<pre></pre>)
          }
          <form action="" ref={form} onSubmit={sendEmail}>
            <div className="flex md:items-center md:ml-5 mt-5 m-7 md:m-0 md:space-x-32 flex-col md:flex-row">
              <div className="">
                <label htmlFor="" className="block">
                  First Name*
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={first_name}
                  onChange={e=>setFirstName(e.target.value)}
                  id=""
                  className="border shadow py-1 w-full md:w-[150%] mt-2"
                />
                <p className="text-red-400 text-[15px]">{formError.first_name}</p>
              </div>
              <div className="">
                <label htmlFor="" className="block mt-2">
                  Last Name*
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={last_name}
                  onChange={e=>setLastName(e.target.value)}
                  id=""
                  className="border shadow w-full md:w-[150%] py-1 mt-2"
                />
                <p className="text-red-400 text-[15px]">{formError.last_name}</p>
              </div>
            </div>

            <div className="flex md:items-center md:ml-5 mt-5 m-7 md:m-0 md:space-x-32 flex-col md:flex-row">
              <div className="">
                <label htmlFor="" className="block">
                  Email*
                </label>
                <input
                  type="text"
                  name="user_email"
                  value={user_email}
                  onChange={e=>setEmail(e.target.value)}
                  id=""
                  className="border shadow py-1 w-full md:w-[150%] mt-2"
                />
                <p className="text-red-400 text-[15px]">{formError.user_email}</p>
              </div>
              <div className="">
                <label htmlFor="" className="block mt-2">
                  Phone*
                </label>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={e=>setPhone(e.target.value)}
                  id=""
                  className="border shadow w-full md:w-[150%] py-1 mt-2"
                />
                <p className="text-red-400 text-[15px]">{formError.phone}</p>
              </div>
            </div>
            <div className="flex md:items-center md:ml-5 mt-5 m-7 md:m-0 md:space-x-32 flex-col md:flex-row">
              <div className="">
                <label htmlFor="" className="block">
                  Location*
                </label>
                <input
                  type="text"
                  name="location"
                  value={location}
                  onChange={e=>setLocation(e.target.value)}
                  id=""
                  className="border shadow py-1 w-full md:w-[150%] mt-2"
                />
                <p className="text-red-400 text-[15px]">{formError.location}</p>
              </div>
              <div className="">
                <label htmlFor="" className="block mt-2">
                  Zip Code*
                </label>
                <input
                  type="text"
                  name="zip_code"
                  value={zip_code}
                  onChange={e=>setZipCode(e.target.value)}
                  id=""
                  className="border shadow w-full md:w-[150%] py-1 mt-2"
                />
                <p className="text-red-400 text-[15px]">{formError.zip_code}</p>
              </div>
            </div>
            <div className="flex md:items-center md:ml-5 mt-5 m-7 md:m-0 md:space-x-32 flex-col md:flex-row">
              <div className="">
                <label htmlFor="" className="block">
                  Highest Education Level*
                </label>
                <input
                  type="text"
                  name="education"
                  value={education}
                  onChange={e=>setEducation(e.target.value)}
                  id=""
                  className="border shadow py-1 w-full md:w-[150%] mt-2"
                />
                <p className="text-red-400 text-[15px]">{formError.education}</p>
              </div>
              <div className="">
                <label htmlFor="" className="block mt-2">
                  School*
                </label>
                <input
                  type="text"
                  name="school"
                  value={school}
                  onChange={e=>setSchool(e.target.value)}
                  id=""
                  className="border shadow w-full md:w-[150%] py-1 mt-2"
                />
                <p className="text-red-400 text-[15px]">{formError.school}</p>
              </div>
            </div>
            <div className="md:ml-5 mt-10 m-7 md:m-0">
              <label htmlFor="" className="block">
                Tell us about yourself?*
              </label>
              <textarea
                name="about"
                value={about}
                onChange={e=>setAbout(e.target.value)}
                id=""
                cols="20"
                rows="5"
                className="border shadow w-full md:w-[95%] mt-2 "
              ></textarea>
              <p className="text-red-400 text-[15px]">{formError.about}</p>
            </div>
            <div className="md:ml-5 mt-10 m-7 md:m-0">
              <label htmlFor="" className="block">
                Tell us about your experience tutoring and what subject you teach?*
              </label>
              <textarea
                name="subject"
                value={subject}
                onChange={e=>setSubject(e.target.value)}
                id=""
                cols="20"
                rows="5"
                className="border shadow w-full md:w-[95%] mt-2 "
              ></textarea>
              <p className="text-red-400 text-[15px]">{formError.subject}</p>
            </div>
            <button
              type="submit"
              className="bg-[#C04C40] py-3 w-[50%] md:w-[20%] rounded-md mt-10 my-10 m-auto text-white flex justify-center"
            >
              Submit
            </button>
          </form>
        </div>
        <section className="md:mt-[-170px] mt-20 md:w-[30%] w-full md:m-14 md:shadow-md md:border-2">
          <h1 className="text-2xl font-bold mt-5 text-center">Why Join Us?</h1>
          <p className="mt-5 px-10 text-center">
            Make money while making a difference in student lives.
          </p>

          <div className="p-7 text-[20px] flex flex-col items-center">
            {items.map((item, i) => (
              <div key={i} className="my-10 flex-1 justify-center text-center">
                <p className="inline-block">{item.icon}</p>
                <h2 className="text-[20px]">{item.tittle}</h2>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Tutor;

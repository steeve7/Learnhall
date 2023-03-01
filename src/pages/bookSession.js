import React, {useRef,useState,useEffect} from "react";
import Header from "../components/HomeLayout/Header";
import Footer from "../components/HomeLayout/Footer";
import { FaRegEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import emailjs from '@emailjs/browser'

const BookSession = () => {
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [user_email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [location, setLocation] = useState();
    const [zip_code, setZipCode] = useState();
    const [student_grade, setGrade] = useState();
    const [student_subject, setStudent] = useState();
    const [why, setWhy] = useState();
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setFormError(validate(first_name,last_name,user_email,phone,location,zip_code,student_grade,student_subject,why));
    setIsSubmit(true) 


    emailjs.sendForm('service_fz1l9la', 'template_gn1jgrk', form.current, 'RxF_geLGHEYY7wMTS')
      .then((result) => {
          console.log(result.text);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("")
          setLocation("")
          setZipCode("")
          setGrade("");
          setStudent("");
          setWhy("")
      }, (error) => {
          console.log(error.text);
      });
  };

  useEffect(() =>{
    console.log(formError)
    if(Object.keys(formError).length == 0 && isSubmit){
    }
  },[formError])

  const validate = () => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // if(!first_name || !last_name || !user_email || !phone || !)
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
    if(!student_grade){
      errors.student_grade = "Student grade required!"
    }
    if(!student_subject){
      errors.student_subject = "Student subject required!"
    }
    if(!why){
      errors.why = "Information required!"
    }

    return errors;
  }

  return (
    <>
      <Header />
      <div className="flex md:flex-row flex-col w-full items-center mt-40 md:mb-[-550px] mb-[-750px]">
        <div className="md:w-[70%] md:m-24 md:shadow-md md:border-2">
          <h1 className="text-3xl font-bold md:ml-5 md:mt-10 text-center md:text-left">
            Book a Session
          </h1>
          <p className="md:ml-5 mt-5 md:w-[90%] px-7 md:px-0 w-full text-center md:text-left">
            Please fill out the form below and submit, we will get back to you
            about your tutoring needs within 24 business hours.
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
                  type="tel"
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
                  Student Grade*
                </label>
                <input
                  type="text"
                  name="student_grade"
                  value={student_grade}
                  onChange={e=>setGrade(e.target.value)}
                  id=""
                  className="border shadow py-1 w-full md:w-[150%] mt-2"
                />
                <p className="text-red-400 text-[15px]">{formError.student_grade}</p>
              </div>
              <div className="">
                <label htmlFor="" className="block mt-2">
                  Student Subject*
                </label>
                <input
                  type="text"
                  name="student_subject"
                  value={student_subject}
                  onChange={e=>setStudent(e.target.value)}
                  id=""
                  className="border shadow w-full md:w-[150%] py-1 mt-2"
                />
                <p className="text-red-400 text-[15px]">{formError.student_subject}</p>
              </div>
            </div>
            <div className="md:ml-5 mt-10 m-7 md:m-0">
              <label htmlFor="" className="block">
                Why does student need tutoring?(optional)
              </label>
              <textarea
                name="why"
                id=""
                cols="20"
                value={why}
                onChange={e=>setWhy(e.target.value)}
                rows="5"
                className="border shadow w-full md:w-[95%] py-1 mt-2 "
              ></textarea>
              <p className="text-red-400 text-[15px]">{formError.why}</p>
            </div>
            <button
              type="submit"
              className="bg-[#C04C40] py-3 w-[50%] md:w-[20%] rounded-md mt-10 my-10 m-auto flex text-white justify-center"
            >
              Submit
            </button>
          </form>
        </div>
        <section className="md:mt-[-310px] mt-20 md:w-[30%] w-full md:m-14 md:shadow-md md:border-2 h-96">
          <h1 className="text-2xl font-bold md:ml-10 mt-5 text-center md:text-left">
            Get in Touch
          </h1>
          <p className="md:ml-10 mt-5 md:px-0 px-10 text-center md:text-left">
            You can also contact us with any question via phone or email
          </p>

          <div className="p-7 text-[20px] flex items-center bg-gray-200 mx-12 mt-5 rounded-lg cursor-pointer">
            <BsFillTelephoneFill className="mt-2 mr-2" />
            <p>503-342-7214</p>
          </div>
          <div className="p-7 text-[20px] flex items-center bg-gray-200 mx-12 mt-5 rounded-lg cursor-pointer">
            <FaRegEnvelope className="mt-2 mr-2" />
            <p>info@learnhall.com</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BookSession;

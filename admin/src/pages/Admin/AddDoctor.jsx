import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
  //state variable for adding image files

  const [docImg, setDocImg] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [experience, setexperience] = useState(1);
  const [fees, setfees] = useState("");
  const [speciality, setspeciality] = useState("General physician");
  const [about, setabout] = useState("");
  const [degree, setdegree] = useState("");
  const [address1, setaddress1] = useState("");
  const [address2, setaddress2] = useState("");

  const { backendUrl, aToken } = useContext(AdminContext);

  const onsubmithandler = async (e) => {
    e.preventDefault();
    try {
      if (!docImg) {
        return toast.error("Doctor image is required");
      }
      const formdata = new FormData();
      formdata.append("image", docImg);
      formdata.append("name", name);
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("experience", experience);
      formdata.append("fees", Number(fees));
      formdata.append("speciality", speciality);
      formdata.append("about", about);
      formdata.append("degree", degree);
      formdata.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );

      //consoe log formdata
      formdata.forEach((value, key) => {
        console.log(`${key}:${value}`);
      });
      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formdata,
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);
        setDocImg(false);
        setname("");
        setemail("");
        setpassword("");
        setexperience("1 year");
        setfees("");
        setspeciality("General physician");
        setabout("");
        setdegree("");
        setaddress1("");
        setaddress2("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };

  return (
    <form onSubmit={onsubmithandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>
      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            hidden
          />
          <p>
            Upload Doctor <br /> picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600 ">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor name</p>
              <input
                onChange={(e) => setname(e.target.value)}
                value={name}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Enter name"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Email</p>
              <input
                onChange={(e) => setemail(e.target.value)}
                value={email}
                className="border rounded px-3 py-2"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Password</p>
              <input
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                className="border rounded px-3 py-2"
                type="password"
                placeholder="password"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select
                onChange={(e) => setexperience(Number(e.target.value))}
                value={experience}
                className="border rounded px-3 py-2"
                name=""
                id=""
              >
                <option value={1}>1 year</option>
                <option value={2}>2 year</option>
                <option value={3}>3 year</option>
                <option value={4}>4 year</option>
                <option value={5}>5 year</option>
                <option value={6}>6 year</option>
                <option value={7}>7 year</option>
                <option value={8}>8 year</option>
                <option value={9}>9 year</option>
                <option value={10}>10 year</option>
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Fees</p>
              <input
                onChange={(e) => setfees(Number(e.target.value))}
                value={fees}
                className="border rounded px-3 py-2"
                type="number"
                placeholder="Fees"
                required
              />
            </div>
          </div>
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <select
                onChange={(e) => setspeciality(e.target.value)}
                value={speciality}
                className="border rounded px-3 py-2"
                name=""
                id=""
              >
                <option value="General physician ">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Education</p>
              <input
                onChange={(e) => setdegree(e.target.value)}
                value={degree}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Education"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Address</p>
              <input
                onChange={(e) => setaddress1(e.target.value)}
                value={address1}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="address 1"
                required
              />
              <input
                onChange={(e) => setaddress2(e.target.value)}
                value={address2}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="address 2"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <p className="mt-4 mb-2">About Doctor</p>
          <textarea
            onChange={(e) => setabout(e.target.value)}
            value={about}
            className="w-full px-4 pt-2 border rounded"
            placeholder="Write about doctor"
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-primary px-10 py-3 mt-4 text-white rounded-full"
        >
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;

//FormData is a special JavaScript object provided by the browser to help you send form data (text + files/images) easily to the backend.

// It automatically sets the right Content-Type header (multipart/form-data) when sending requests.

// This is important because plain JSON (application/json) cannot handle files (like images).

// So basically:
// 👉 Use JSON → for simple text data.
// 👉 Use FormData → when you need to send files and text together.

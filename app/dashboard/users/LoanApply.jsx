"use client";

import supabase from "@/supabase";
import Head from "next/head";
import { useRouter } from "next/compat/router";
import { useState } from "react";

export default function LoanApply() {
  const router = useRouter();

  const [userProfile, setUserProfile] = useState({
    Surname: "",
    FirstName: "",
    OtherNames: "",
    DOB: "",
    MadienName: "",
    BVN: "",
    NiN: "",
    EmploymentStatus: "",
    Employer: "",
    Occupation: "",
    BusinessName: "",
    BusinessNature: "",
    IDMean: "",
    Gender: "",
    Nationality: "",
    StateOfOrigin: "",
    LGA: "",
    HomeTown: "",
    MaritalStatus: "",
    PhoneNo: "",
    EmailAddress: "",
    ResidentialAddress: "",
  });

  const onChange = (e) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    try {
      await supabase.from("userProfile").upsert([userProfile]);
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="container mx-auto mt-8 max-w-[560px]">
        <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-900 mb-4">
          <h1 className="text-3xl font-semibold">Loan Application</h1>
        </div>
        <form>
          {[
            // { label: "Title", name: "title" },
            { label: "Surname", name: "Surname" },
            { label: "First Name", name: "FirstName" },
            { label: "Other Names", name: "OtherNames" },
            { label: "Date of Birth", name: "DOB", type: "date" },
            { label: "Mother's Maiden Name", name: "MadienName" },
            { label: "BVN", name: "BVN" },
            { label: "NIN", name: "NiN" },
            {
              label: "Employment Status",
              name: "EmploymentStatus",
              type: "select",
              options: ["Employed", "Self-Employed"],
            },
            { label: "Employer's Name", name: "Employer" },
            // { label: "Employer's Address", name: "employerAddress" },
            { label: "Occupation", name: "Occupation" },
            { label: "Business Name", name: "BusinessName" },
            // { label: "Business Address", name: "businessAddress" },
            { label: "Nature of Business", name: "BusinessNature" },
            { label: "Valid Means of Identification", name: "IDMean" },
            {
              label: "Gender",
              name: "Gender",
              type: "select",
              options: ["Male", "Female", "Other"],
            },
            { label: "Nationality", name: "Nationality" },
            { label: "State of Origin", name: "StateOfOrigin" },
            { label: "LGA", name: "LGA" },
            { label: "Home Town", name: "HomeTown" },
            {
              label: "Marital Status",
              name: "MaritalStatus",
              type: "select",
              options: ["Single", "Married", "Divorced", "Widowed"],
            },
            { label: "Phone Number", name: "PhoneNo" },
            { label: "Email Address", name: "EmailAddress", type: "email" },
            { label: "Residential Address", name: "ResidentialAddress" },
          ].map(({ label, name, type = "text", options }) => (
            <div className="mb-4" key={name}>
              <label>{label}</label>
              {type === "select" ? (
                <select
                  className="mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
                  name={name}
                  value={userProfile[name]}
                  onChange={onChange}
                >
                  <option value="">Select {label}</option>
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  className="mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
                  type={type}
                  name={name}
                  value={userProfile[name]}
                  onChange={onChange}
                />
              )}
            </div>
          ))}
          <button
            className="bg-green-600 hover:bg-opacity-80 text-white rounded-lg px-4 py-2 duration-200 w-full"
            type="button"
            onClick={handleCreate}
          >
            Submit Application
          </button>
        </form>
      </div>
      <Head>
        <title>Loan Application</title>
      </Head>
    </>
  );
}

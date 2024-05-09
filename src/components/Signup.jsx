import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function Signup() {
  const LoginSchema = Yup.object().shape({
    username: Yup.string("Invalid email").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string("Invalid password").required("Required"),
  });
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <div className="w-full flex justify-center items-center  h-screen">
            <div className="modal-box">
              <form method="dialog">
                <Link
                  to={"/"}
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </Link>
              </form>
              <h3 className="font-bold text-xl text-center text-indigo-500">
                Signup
              </h3>
              <Form>
                <div className="flex flex-col space-y-6 py-12">
                  <label className=" flex flex-col font-bold">
                    UserName
                    <Field
                      name="username"
                      type="text"
                      className="border-b py-2 focus:outline-none font-normal"
                      placeholder="Enter Your Email"
                    />
                    {errors.username && touched.username ? (
                      <div className="text-red-400 font-normal">
                        {errors.username}
                      </div>
                    ) : null}
                  </label>
                  <label className=" flex flex-col font-bold">
                    Email
                    <Field
                      name="email"
                      type="text"
                      className="border-b py-2 focus:outline-none font-normal"
                      placeholder="Enter Your Email"
                    />
                    {errors.email && touched.email ? (
                      <div className="text-red-400 font-normal">
                        {errors.email}
                      </div>
                    ) : null}
                  </label>
                  <label className="flex flex-col font-bold">
                    Password
                    <Field
                      name="password"
                      type="password"
                      className="border-b py-2 focus:outline-none font-normal"
                      placeholder="Enter your Password"
                    />
                    {errors.password && touched.password ? (
                      <div className="text-red-400 font-normal">
                        {errors.password}
                      </div>
                    ) : null}
                  </label>
                  <div className="flex flex-row justify-between  items-center">
                    <button
                      type="submit"
                      className="bg-indigo-600 w-24 p-2 py-2 rounded-md text-white"
                    >
                      signup
                    </button>
                    <p>
                      Have account{" "}
                      <Link
                        className="text-indigo-500 underline  cursor-pointer"
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                      >
                        Login
                      </Link>
                      <Login />
                    </p>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function Login() {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string("Invalid password").required("Required"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <div className="">
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <Link
                  to={"/"}
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </Link>
              </form>
              <h3 className="font-bold text-lg  text-center text-indigo-500">Login</h3>
              <Form>
                <div className="flex flex-col space-y-6 py-12">
                  <label className=" flex flex-col font-bold">
                    Email
                    <Field
                      name="email"
                      type="text"
                      className="border-b py-2 focus:outline-none font-normal"
                      placeholder="Enter Your Email"
                    />
                    {errors.email && touched.email ? (
                      <div className="text-red-400 font-normal">{errors.email}</div>
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
                      <div className="text-red-400 font-normal">{errors.password}</div>
                    ) : null}
                  </label>
                  <div className="flex flex-row justify-between  items-center">
                    <button
                      className="bg-indigo-600 w-24 p-2 py-2 rounded-md text-white"
                      type="submit"
                    >
                      Login
                    </button>
                    <p>
                      Not registered?{" "}
                      <Link
                        to={"/signup"}
                        className="text-indigo-500 underline  cursor-pointer"
                      >
                        Signup
                      </Link>
                    </p>
                  </div>
                </div>
              </Form>
            </div>
          </dialog>
        </div>
      )}
    </Formik>
  );
}

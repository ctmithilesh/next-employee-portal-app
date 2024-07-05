"use client";
import React from "react";
import RegisterLabel from "./RegisterLabel";
import RegisterHeader from "./RegisterHeader";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import RegisterErrorMessage from "./RegisterErrorMessage";
import RegisterInputElement from "./RegisterInputElement";
import { registerUser } from "@/lib/apis/actions";
const RegisterForm = () => {
  const schema = yup.object({
    username: yup.string().required("Required"),
    email: yup.string().required("Required"),
    password: yup.string().required("Required"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { username, email, password } = data;
    console.log(username, email, password);

    try {
      const result = await registerUser(username, email, password);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <RegisterHeader
          title={"Register"}
          description={"Register new employee"}
        />
        <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <RegisterLabel name="username" />
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered"
                {...register("username")}
              />
              <RegisterErrorMessage error={errors.email} name="username" />
            </div>
            <div className="form-control">
              <RegisterLabel name="email" />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                {...register("email")}
              />
              <RegisterErrorMessage error={errors.email} name="email" />
            </div>
            <div className="form-control">
              <RegisterLabel name="password" />
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password")}
              />
              <RegisterErrorMessage error={errors.password} name="password" />
            </div>
            <div className="mt-6 form-control">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

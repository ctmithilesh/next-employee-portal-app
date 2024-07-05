"use client";
import { logoutUser } from "@/lib/apis/actions";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link className="text-xl btn btn-ghost" href="/employee-dashboard">
          daisyUI
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="w-24 input input-bordered md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link className="justify-between" href="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="justify-between" href="/add-details">
                Add Employee
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button onClick={() => logoutUser()}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

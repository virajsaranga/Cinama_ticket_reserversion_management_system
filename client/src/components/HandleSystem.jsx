import React from "react";
import "./App.css";

export default function HandleSystem() {
  return (
    <div className="sysMenu">
      <div className="navItem">
        <a href="/customers">
          <button type="button" className="btn btn-secondary menuBtn">
            Manage customers
          </button>
        </a>
      </div>
      <div className="navItem">
        <a href="/bookings">
          <button type="button" className="btn btn-secondary menuBtn">
            View movie ticket bookings
          </button>
        </a>
      </div>
      <div className="navItem">
        <a href="/payments">
          <button type="button" className="btn btn-secondary menuBtn">
            View payments
          </button>
        </a>
      </div>
      <div className="navItem">
        <a href="/admins">
          <button type="button" className="btn btn-secondary menuBtn">
            Manage admins
          </button>
        </a>
      </div>
      <div className="navItem">
        <a href="/addAdmin">
          <button type="button" className="btn btn-secondary menuBtn">
            Add a new admin
          </button>
        </a>
      </div>
    </div>
  );
}

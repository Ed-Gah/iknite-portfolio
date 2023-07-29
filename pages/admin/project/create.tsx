import Layout from "@/components/admin/Layout";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Create() {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [venue, setVenue] = useState("");
  const [coverImage, setCoverImage] = useState(
    "/images/Cliqkets_landing-img_2.png"
  );
  const [googleMapLink, setGoogleMapLink] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [refundPolicy, setRefundPolicy] = useState("");

  const [ticketName, setTicketName] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");

  return (
    <Layout>
      <div>
        <div className="container mx-auto mt-5">
          <div className="flex w-full gap-3">
            <div className="w-full rounded-lg bg-gray-800 p-5 lg:w-8/12 lg:rounded-l-none">
              <h3 className="header1-bold pt-4 text-center">Create Project</h3>
              <div className="mb-4 rounded bg-gray-800 px-8 pb-8 pt-6">
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mb-0 md:mr-2 lg:w-3/5">
                    <label className="mb-2 block text-sm font-bold text-white">
                      Title
                    </label>
                    <input
                      className="input-validated w-full"
                      type="text"
                      placeholder="Enter Event Title"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="md:ml-2 lg:w-2/5">
                    <label className="mb-2 block text-sm font-bold text-white">
                      City
                    </label>
                    <input
                      className="input-validated w-full"
                      type="text"
                      placeholder="City"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mb-0 md:mr-2 lg:w-2/6">
                    <label className="mb-2 block text-sm font-bold text-white">
                      Venue
                    </label>
                    <input
                      className="input-validated w-full"
                      type="text"
                      placeholder="Enter Event Venue"
                      onChange={(e) => setVenue(e.target.value)}
                    />
                  </div>
                  <div className="mb-4 md:mb-0 md:mr-2 lg:w-2/6">
                    <label className="mb-2 block text-sm font-bold text-white">
                      Date
                    </label>
                    <input
                      className="input-validated w-full"
                      type="text"
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  <div className="mb-4 md:mb-0 md:mr-2 lg:w-2/6">
                    <label className="mb-2 block text-sm font-bold text-white">
                      Time
                    </label>
                    <input
                      className="input-validated w-full"
                      type="time"
                      placeholder="Enter Event Time"
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 w-full md:mb-0 md:mr-2">
                    <label className="mb-2 block text-sm font-bold text-white">
                      Google Map Link
                    </label>
                    <input
                      className="input-validated w-full"
                      type="text"
                      placeholder="Enter google map link"
                      onChange={(e) => setGoogleMapLink(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="mb-2 block text-sm font-bold text-white">
                    Description
                  </label>
                </div>
                <div className="mb-4">
                  <label className="mb-2 block text-sm font-bold text-white">
                    Refund Policy
                  </label>
                  <textarea
                    cols={30}
                    rows={5}
                    onChange={(e) => setRefundPolicy(e.target.value)}
                    className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-white shadow focus:outline-none"
                  ></textarea>
                </div>

                <div className="mb-4 md:mb-0 md:mr-2 lg:w-2/6">
                  <label className="mb-2 block text-sm font-bold text-white">
                    Organizer Contact
                  </label>
                  <input
                    className="input-validated w-full"
                    type="text"
                    placeholder="Enter organization contact"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="my-4 flex justify-end text-center">
                  <button className="btn-active ">Create Event</button>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </Layout>
  );
}

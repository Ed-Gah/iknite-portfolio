import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../Slices/userSlice";
import { TicketTypes } from "../../types/events.typing";
import { Editor } from "@tinymce/tinymce-react";
import { useRouter } from "next/router";

export default function EditEvent() {
  const router = useRouter();
  const { eventId } = router.query;

  // console.log("Event ===>",);
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
  const ticketPaload: TicketTypes[] = [];
  const [tickets, setTickets] = useState<TicketTypes[]>(ticketPaload);
  const [ticketName, setTicketName] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const user = useSelector(selectUser);
  const editorRef = useRef(null);
  const getEvent = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/events/${eventId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((event) => {
        setTitle(event.title);
        setCity(event.city);
        setVenue(event.venue);
        setCoverImage(event.coverImage);
        setGoogleMapLink(event.google_map_link);
        setTicketPrice(event.ticketPrice);
        setDate(event.Date);
        setTime(event.time);
        setPhone(event.phone);
        setRefundPolicy(event.refund_policy);
        setDescription(event.description);
        setTickets(event.tickets);
      })
      .catch((error) => error);
  };

  useEffect(() => {
    getEvent();
  }, []);

  const addTicket = () => {
    setTickets([
      ...tickets,
      {
        quantity: 0,
        ticket_image: "",
        name: ticketName,
        price: +ticketPrice,
        description: "",
        status: false,
        ticket_limits: 0,
      },
    ]);
  };

  const eventObj = {
    user_id: user?.uid,
    title,
    city,
    city_id: city,
    cover_photo: coverImage,
    venue,
    Date: date,
    time,
    google_map_link: googleMapLink,
    organizer: phone,
    description: description,
    refund_policy: refundPolicy,
    tickets,
    category_id: "show",
  };

  const updateEvent = async () => {
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/organizer/event?event_id=${eventId}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify(eventObj),
      }
    )
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        error;
      });
  };

  const handleDelete = (id: string | undefined) => {
    const updatedTickets = tickets?.filter((ticket) => ticket.id !== id);
    setTickets(updatedTickets);
  };
  return (
    <div>
      <div className="container mx-auto mt-5">
        <div className="flex w-full gap-3">
          <div className="w-full rounded-lg bg-white p-5 lg:w-8/12 lg:rounded-l-none">
            <h3 className="header1-bold pt-4 text-center">Edit Event</h3>
            <div className="mb-4 rounded bg-white px-8 pt-6 pb-8">
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 lg:w-3/5">
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Title
                  </label>
                  <input
                    className="input-validated w-full"
                    type="text"
                    defaultValue={title}
                    placeholder="Enter Event Title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="md:ml-2 lg:w-2/5">
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    City
                  </label>
                  <input
                    className="input-validated w-full"
                    type="text"
                    placeholder="City"
                    defaultValue={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 lg:w-2/6">
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Venue
                  </label>
                  <input
                    className="input-validated w-full"
                    type="text"
                    defaultValue={venue}
                    placeholder="Enter Event Venue"
                    onChange={(e) => setVenue(e.target.value)}
                  />
                </div>
                <div className="mb-4 md:mr-2 md:mb-0 lg:w-2/6">
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Date
                  </label>
                  <input
                    className="input-validated w-full"
                    type="text"
                    defaultValue={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="mb-4 md:mr-2 md:mb-0 lg:w-2/6">
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Time
                  </label>
                  <input
                    className="input-validated w-full"
                    type="text"
                    placeholder="Enter Event Time"
                    defaultValue={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 w-full md:mr-2 md:mb-0">
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Google Map Link
                  </label>
                  <input
                    className="input-validated w-full"
                    type="text"
                    defaultValue={googleMapLink}
                    placeholder="Enter google map link"
                    onChange={(e) => setGoogleMapLink(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Description
                </label>
                {/* <textarea
                  cols={30}
                  rows={10}
                  onChange={(e) => setDescription(e.target.value)}
                  className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
                ></textarea> */}

                <Editor
                  onInit={(evt: any, editor: any) =>
                    (editorRef.current = editor)
                  }
                  initialValue={description}
                  apiKey={`${process.env.NEXT_PUBLIC_TINY_API_KEY}`}
                  init={{
                    height: 200,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | " +
                      "bold italic backcolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
              </div>
              <div className="mb-4">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Refund Policy
                </label>
                <textarea
                  cols={30}
                  rows={5}
                  defaultValue={refundPolicy}
                  onChange={(e) => setRefundPolicy(e.target.value)}
                  className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
                ></textarea>
              </div>

              <div className="mb-4 md:mr-2 md:mb-0 lg:w-2/6">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Organizer Contact
                </label>
                <input
                  className="input-validated w-full"
                  type="text"
                  defaultValue={phone}
                  placeholder="Enter organization contact"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="my-4 flex justify-end text-center">
                <button className="btn-active " onClick={() => updateEvent()}>
                  Update Event
                </button>
              </div>
            </div>
          </div>
          <div className="hidden h-auto w-full rounded-l-lg bg-white bg-cover p-4 lg:block lg:w-4/12">
            <div>
              <img src={coverImage} alt="Update Ticket Image" />
              <input
                type="text"
                name="image"
                className="input-validated my-4 w-full"
                defaultValue={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
              />
            </div>

            <div>
              <h1 className="header2-bold pt-2">Enter Tickets</h1>

              <div className="flex gap-1">
                <div className="w-3/5">
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Ticket Name
                  </label>
                  <input
                    className="input-validated w-full"
                    type="text"
                    placeholder="Enter ticket name"
                    onChange={(e) => setTicketName(e.target.value)}
                  />
                </div>
                <div className="w-2/5">
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Price
                  </label>
                  <input
                    className="input-validated w-full"
                    type="text"
                    placeholder="Enter price"
                    onChange={(e) => setTicketPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="my-4 flex justify-end text-center">
                <button className="btn-active " onClick={() => addTicket()}>
                  Add ticket
                </button>
              </div>

              <div className="">
                {/* {tickets ? ( */}
                <table className="w-full text-left text-sm text-gray-500">
                  <tbody className="container">
                    <tr>
                      <td>Name</td>
                      <td>Price</td>
                    </tr>
                    {tickets?.map((ticket) => {
                      return (
                        <tr key={ticket?.id} className="bg-white">
                          <td className="py-1">{ticket?.name}</td>
                          <td>{ticket?.price} frs</td>
                          <td>
                            <button
                              className=""
                              onClick={() => handleDelete(ticket.id)}
                            >
                              X
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

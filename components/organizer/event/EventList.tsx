import React from "react";
import EventItem from "./EventItem";
import Link from "next/link";
import { EventTypes } from "../../../types/events.typing";

interface Props {
  events: EventTypes[];
}

export default function EventList({ events }: Props) {
  return (
    <div>
      <div className="shadow-xs w-full overflow-hidden rounded-lg">
        <span className="btn-active float-right my-3 flex w-fit">
          {" "}
          <Link href="/organizer/create">Create Event</Link>
        </span>
        <div className="w-full overflow-x-auto">
          <table className="whitespace-no-wrap w-full">
            _
            <tr className="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:bg-gray-800 dark:text-gray-400">
              <th className="px-4 py-3"></th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
            {/* <tbody className="divide-y bg-white"> */}
            {events.map((event) => (
              <EventItem
                key={event.id}
                id={event.id}
                title={event.title}
                date={event.Date}
                cover_image={event.cover_photo}
              />
            ))}
            {/* </tbody> */}
          </table>
        </div>
      </div>
    </div>
  );
}

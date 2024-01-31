import React from 'react';
import EventForm from "@/components/shared/EventForm";
import {auth} from "@clerk/nextjs";

function CreateEvent() {
    const { sessionClaims } = auth();

    const userId = sessionClaims?.userId as string;

    return (
        <>
            <section className="bg-secondary bg-dotted-patern bg-cover bg-center py-5 md:py-10">
                <h3 className="wrapper h3-bold text-center sm:text-left">
                    Create Event
                </h3>
            </section>

            <div className="wrapper my-8">
                <EventForm userId={"ini"} type={"Create"} />
            </div>
        </>
    );
}

export default CreateEvent;
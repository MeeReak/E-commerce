import React from "react";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Map } from "lucide-react";

export default function page() {
  return (
    <>
      <div className="flex justify-center space-x-8 mt-10">
        <section className="w-full max-w-[312px] p-8 rounded-lg shadow-lg border border-gray-200 space-y-6">
          <div className="flex flex-col items-center space-y-2 w-full border-b-[1px] pb-4">
            <MapPin className="text-green-700 w-12 h-12" />
            <h3 className="text-[16px] text-gray-800 font-medium text-center">
              Russian Federation Blvd (110), Phnom Penh, Cambodia
            </h3>
          </div>

          <div className="flex flex-col items-center space-y-2 w-full border-b-[1px] pb-4">
            <Mail className="text-green-700 w-12 h-12" />
            <h3 className="text-[16px] text-gray-800 font-medium text-center">
              echofresh@echofresh.com <br />
              help.echofress@echofresh.com
            </h3>
          </div>

          <div className="flex flex-col items-center space-y-2 w-full">
            <PhoneCall className="text-green-700 w-12 h-12" />
            <h3 className="text-[16px] text-gray-800 font-medium text-center">
              (+855) 555-048-72 <br />
              (+855) 333-048-72
            </h3>
          </div>
        </section>

        <section className="rounded-lg shadow-lg border border-gray-200">
          <div className="w-[984] h-[507] bg-white space-y-4 p-10 rounded-lg">
            <h1 className="text-[24px] font-bold">Just Say Hello!</h1>
            <p className="text-gray-400 text-[15px]">
              Do you fancy saying hi to me or you want to get started with your{" "}
              <br />
              project and you need my help? Feel free to contact me.
            </p>
            <div className="flex space-x-4">
              <Input placeholder="Template Cookie" />
              <Input placeholder="example@email.com" />
            </div>
            <Input />
            <Input placeholder="Subjects" className="h-[98px]" />
            <Button className=" bg-[#00B207] text-white rounded-full">
              Send Message
            </Button>
          </div>
        </section>
      </div>
      <iframe
        className="h-[400px] mt-[80px] shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15634.728094931026!2d104.8803618!3d11.5746375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRoyal%20University%20of%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1733057435550!5m2!1sen!2skh"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

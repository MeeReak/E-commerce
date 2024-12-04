"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

const FormSchema = z.object({
  firstName: z.string().min(5, {
    message: "First name must be at least 5 characters.",
  }),
  lastName: z.string().min(5, {
    message: "Last name must be at least 5 characters.",
  }),
  email: z.string(),
  phoneNumber: z.number(),
});

export function AccountSetting() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      // phoneNumber:,
    },
  });

  // function onSubmit(data: z.infer<typeof FormSchema>) {
  //   console.log("Hello");
  // }

  return (
    <>
      <div className="border rounded-lg mt-10">
        <header className=" p-5 border-b text-xl font-medium">
          Account Settings
        </header>
        <div className="flex p-5">
          <div className="w-full">
            <Form {...form}>
              <form
                // onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {/* <div className="w-full flex gap-5"> */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-900 text-sm font-normal leading-[21px]">
                        First name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="placeholder:text-gray-600 placeholder:text-sm placeholder:font-normal placeholder:leading-[20.8px]"
                          //defaultValue={""}
                          placeholder="Your first name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-900 text-sm font-normal leading-[21px]">
                        Last name
                      </FormLabel>
                      <FormControl>
                        <Input
                          //defaultValue={""}
                          className="placeholder:text-gray-600 placeholder:text-sm placeholder:font-normal placeholder:leading-[20.8px]"
                          placeholder="Your last name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* </div> */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-900 text-sm font-normal leading-[21px]">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          //defaultValue={""}
                          className="placeholder:text-gray-600 placeholder:text-sm placeholder:font-normal placeholder:leading-[20.8px]"
                          placeholder="Email Address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-900 text-sm font-normal leading-[21px]">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          //defaultValue={""}
                          className="placeholder:text-gray-600 placeholder:text-sm placeholder:font-normal placeholder:leading-[20.8px]"
                          placeholder="Phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="rounded-full text-white text-sm font-semibold leading-[16.8px]">
                  Save Changes
                </Button>
              </form>
            </Form>
          </div>
          <div className="w-full flex-col flex justify-center items-center gap-y-5">
            <Image
              className="bg-black rounded-full"
              src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
              alt=""
              width={224}
              height={224}
            />
            <Button
              className="rounded-full text-[#00b207] text-sm font-semibold leading-[16.8px]"
              variant={"outline"}
            >
              Chose Image
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

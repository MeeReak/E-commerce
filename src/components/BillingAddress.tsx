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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Province } from "@/utils/mockup";

const FormSchema = z.object({
  firstName: z.string().min(5, {
    message: "First name must be at least 5 characters.",
  }),
  lastName: z.string().min(5, {
    message: "Last name must be at least 5 characters.",
  }),
  companyName: z.string().min(5, {
    message: "Company name must be at least 5 characters.",
  }),
  address: z.string(),
  country: z.string(),
  state: z.string(),
  zipCode: z.number(),
  email: z.string(),
  phoneNumber: z.number(),
});

export function BillingAddress() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      address: "",
      country: "",
      state: "",
      // zipCode,
      email: "",
      // phoneNumber,
    },
  });

  // function onSubmit(data: z.infer<typeof FormSchema>) {
  //   console.log("Hello");
  // }

  return (
    <>
      <div className="border rounded-lg">
        <header className="p-5 border-b text-xl font-medium">
          Billing Address
        </header>
        <div className="p-5">
          <Form {...form}>
            <form
              // onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-7"
            >
              <div className="w-full flex gap-5">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-900 font-poppins text-sm font-normal leading-[21px]">
                        Fist name
                      </FormLabel>
                      <FormControl>
                        <Input
                          //defaultValue={""}
                          className="placeholder:text-gray-600 placeholder:text-sm placeholder:font-normal placeholder:leading-[20.8px]"
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
                      <FormLabel className="text-gray-900 font-poppins text-sm font-normal leading-[21px]">
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
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-900 font-poppins text-sm font-normal leading-[21px]">
                        Company Name{" "}
                        <span className="text-slate-500">(Optional)</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          //defaultValue={""}
                          className="placeholder:text-gray-600 placeholder:text-sm placeholder:font-normal placeholder:leading-[20.8px]"
                          placeholder="Company name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900 font-poppins text-sm font-normal leading-[21px]">
                      Street Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        //defaultValue={""}
                        className="placeholder:text-gray-600 placeholder:text-sm placeholder:font-normal placeholder:leading-[20.8px]"
                        placeholder="Street address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full flex gap-5">
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-900 font-poppins text-sm font-normal leading-[21px]">
                        Country / Region
                      </FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" {...field} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {/* <SelectLabel>Province</SelectLabel> */}
                              <SelectItem value="Cambodia">Cambodia</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-900 font-poppins text-sm font-normal leading-[21px]">
                        Province
                      </FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" {...field} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {/* <SelectLabel>Fruits</SelectLabel> */}
                              {Province.map((data) => (
                                <SelectItem key={data.id} value={data.name}>
                                  {data.name}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-900 font-poppins text-sm font-normal leading-[21px]">
                        Zip Code
                      </FormLabel>
                      <FormControl>
                        <Input
                          //defaultValue={""}
                          className="placeholder:text-gray-600 placeholder:text-sm placeholder:font-normal placeholder:leading-[20.8px]"
                          placeholder="Zip Code"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full flex gap-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-900 font-poppins text-sm font-normal leading-[21px]">
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
                      <FormLabel>Phone</FormLabel>
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
              </div>
              <Button className="rounded-full text-white text-sm font-semibold leading-[16.8px]">
                Save Changes
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}

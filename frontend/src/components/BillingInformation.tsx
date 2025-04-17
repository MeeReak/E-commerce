"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

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

export function BillingInformation() {
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
      <Form {...form}>
        <form
          // onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-7"
        >
          <div className="w-full flex gap-5">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-gray-900 text-sm font-normal leading-[150%]">
                    Fist name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Your first name" {...field} />
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
                  <FormLabel className="text-gray-900 text-sm font-normal leading-[150%]">
                    Last name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Your last name" {...field} />
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
                  <FormLabel className="text-gray-900 text-sm font-normal leading-[150%]">
                    Company Name
                    <span className="text-slate-500 ">(Optional)</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Company name" {...field} />
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
                <FormLabel className="text-gray-900 text-sm font-normal leading-[150%]">
                  Street Address
                </FormLabel>
                <FormControl>
                  <Input placeholder="Street address" {...field} />
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
                <FormItem className="w-1/3">
                  <FormLabel className="text-gray-900 text-sm font-normal leading-[150%]">
                    Country / Region
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" {...field} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Country</SelectLabel>
                          <SelectItem value="japan">Japan</SelectItem>
                          <SelectItem value="italy">Italy</SelectItem>
                          <SelectItem value="australia">Australia</SelectItem>
                          <SelectItem value="france">France</SelectItem>
                          <SelectItem value="cambodia">Cambodia</SelectItem>
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
                <FormItem className="w-1/6">
                  <FormLabel className="text-gray-900 text-sm font-normal leading-[150%]">
                    States
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" {...field} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>State</SelectLabel>
                          <SelectItem value="california">California</SelectItem>
                          <SelectItem value="new_york">New York</SelectItem>
                          <SelectItem value="florida">Florida</SelectItem>
                          <SelectItem value="texas">Texas</SelectItem>
                          <SelectItem value="hawaii">Hawaii</SelectItem>
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
                <FormItem className="w-[10%]">
                  <FormLabel className="text-gray-900 text-sm font-normal leading-[150%]">
                    Zip Code
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Zip Code" {...field} />
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
                  <FormLabel className="text-gray-900 text-sm font-normal leading-[150%]">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Email Address" {...field} />
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
                  <FormLabel className="text-gray-900 text-sm font-normal leading-[150%]">
                    Phone
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center space-x-2 pb-10  border-b">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#4D4D4D]  text-sm font-normal leading-[150%]"
            >
              Ship to a different address
            </label>
          </div>
          <div className="space-y-5">
            <header>
              <h1 className="text-gray-900  text-2xl font-medium leading-[150%]">
                Additional Info
              </h1>
            </header>
            <div className="space-y-2">
              <p className="text-gray-900 text-sm font-normal leading-[150%]">
                Order Notes (Optional)
              </p>
              <Textarea
                className="h-[100px] text-[#999] text-base font-normal leading-[130%]"
                placeholder="Notes about your order, e.g. special notes for delivery"
              />
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}

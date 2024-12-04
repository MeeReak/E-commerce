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

const FormSchema = z.object({
  currentPassword: z.number().min(5, {
    message: "Current Password name must be at least 5 characters.",
  }),
  newPassword: z.number().min(5, {
    message: "New Password must be at least 5 characters.",
  }),
  confirmPassword: z.number().min(5, {
    message: "Confirm Password must be at least 5 characters.",
  }),
});

export function ChangePassword() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  // function onSubmit(data: z.infer<typeof FormSchema>) {
  //   console.log("Hello");
  // }

  return (
    <>
      <div className="border rounded-lg">
        <header className="p-5 border-b text-xl font-medium">
          Change Password
        </header>
        <div className="p-5">
          <Form {...form}>
            <form
              // onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-7"
            >
              <FormField
                control={form.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-gray-900 font-poppins text-sm font-normal leading-[21px]">
                      Current Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:text-gray-600 placeholder:text-sm placeholder:font-normal placeholder:leading-[20.8px]"
                        placeholder="Current Password"
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
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-900 font-poppins text-sm font-normal leading-[21px]">
                        New Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="placeholder:text-gray-600 placeholder:text-sm placeholder:font-normal placeholder:leading-[20.8px]"
                          placeholder="New Password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-900 font-poppins text-sm font-normal leading-[21px]">
                        New Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="placeholder:text-gray-600 placeholder:text-sm placeholder:font-normal placeholder:leading-[20.8px]"
                          placeholder="New Password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button className="rounded-full text-white text-sm font-semibold leading-[16.8px]">
                Changes Password
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}

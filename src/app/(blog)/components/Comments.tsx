"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  fullName: z.string().min(5, {
    message: "fullName must be at least 5 characters.",
  }),
  email: z.string(),
});
const Comments = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });
  return (
    <>
      <h1 className="text-gray-900 pb-4 text-[24px] font-medium leading-[36px]">
        Leave a Comment
      </h1>
      <Form {...form}>
        <form className="space-y-5">
          <div className="w-full flex items-center gap-5">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-gray-900 text-sm  font-normal leading-6">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="placeholder:text-gray-600 text-base font-normal leading-[20.8px]"
                      placeholder="Enter Full name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-gray-900 text-sm font-normal leading-6">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="placeholder:text-gray-600 text-base font-normal leading-[20.8px]"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label
              className="text-gray-900 text-sm font-normal leading-6"
              htmlFor="message"
            >
              Message
            </Label>
            <Textarea
              className="placeholder:text-gray-600 text-base font-normal leading-[20.8px]"
              placeholder="Write your comment here."
              id="message"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" className=" border-[#CCCCCC] border" />
            <label
              htmlFor="terms"
              className="text-gray-600 text-sm font-normal leading-6 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Save my name and email in this browser for the next time I
              comment.
            </label>
          </div>
          <Button
            className="rounded-full text-white text-base font-semibold leading-6"
            type="submit"
          >
            Post comments
          </Button>
        </form>
      </Form>
    </>
  );
};

export default Comments;

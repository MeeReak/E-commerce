"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

// Zod schema for validation
const commentSchema = z.object({
  name: z.string().min(1, { message: "Full name is required" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  comment: z.string().min(1, { message: "Comment cannot be empty" }),
});

type CommentFormData = z.infer<typeof commentSchema>;

const Comments = ({
  setComment,
  comment,
}: {
  setComment: React.Dispatch<
    React.SetStateAction<
      | { name: string; avatar: string; comment: string; date: string }[]
      | undefined
    >
  >;
  comment: { name: string; avatar: string; comment: string; date: string }[];
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
  });

  const handleFormSubmit = (data: CommentFormData) => {
    const newComment = {
      ...data,
      avatar:
        "https://media.istockphoto.com/id/588348500/vector/male-avatar-profile-picture-vector.jpg?s=612x612&w=0&k=20&c=tPPah8S9tmcyOXCft1Ct0tCAdpfSaUNhGzJK7kQiQCg=",
      date: new Date().toDateString(),
    };
    setComment([...comment, newComment]);
    reset(); // Clear form after successful submit
  };

  return (
    <>
      <h1 className="text-gray-900 pb-4 text-[24px] font-medium leading-[36px]">
        Leave a Comment
      </h1>
      <div className="space-y-4">
        <div className="w-full flex items-center gap-5">
          {/* Name Input */}
          <div className="w-full">
            <Label className="text-gray-900 text-sm font-normal leading-6">
              Full Name
            </Label>
            <Controller
              name="name"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  className="placeholder:text-gray-600 text-base font-normal leading-[20.8px]"
                  placeholder="Enter Full name"
                />
              )}
            />
            <p className="text-red-500 text-xs h-1">
              {errors.name && errors.name.message}
            </p>
          </div>

          {/* Email Input */}
          <div className="w-full">
            <Label className="text-gray-900 text-sm font-normal leading-6">
              Email
            </Label>
            <Controller
              name="email"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  className="placeholder:text-gray-600 text-base font-normal leading-[20.8px]"
                  placeholder="Enter your email"
                />
              )}
            />
            <p className="text-red-500 text-xs h-1">
              {errors.email && errors.email.message}
            </p>
          </div>
        </div>

        {/* Comment Input */}
        <div className="grid w-full gap-1.5">
          <Label className="text-gray-900 text-sm font-normal leading-6">
            Message
          </Label>
          <Controller
            name="comment"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                className="placeholder:text-gray-600 text-base font-normal leading-[20.8px]"
                placeholder="Write your comment here."
                id="message"
              />
            )}
          />
          <p className="text-red-500 text-xs h-2">
            {errors.comment && errors.comment.message}
          </p>
        </div>

        {/* Checkbox for saving name and email */}
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" className="border-[#CCCCCC] border" />
          <label
            htmlFor="terms"
            className="text-gray-600 text-sm font-normal leading-6 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Save my name and email in this browser for the next time I comment.
          </label>
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit(handleFormSubmit)}
          className="rounded-full text-white text-base font-semibold leading-6"
        >
          Post comments
        </Button>
      </div>
    </>
  );
};

export default Comments;

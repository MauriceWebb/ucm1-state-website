"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(5, {
      message: "email must be at least 5 characters.",
    })
    .email("This is not a valid email address."),
  body: z
    .string()
    .min(20, { message: "This question must be at least 20 characters." }),
  confirmation: z
    .string()
    .min(5, {
      message: "email must be at least 5 characters.",
    })
    .email("This is not a valid email address."),
});

export default function QuestionForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      body: "",
      confirmation: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.confirmation !== values.email) {
      form.setError("confirmation", {
        type: "pattern",
        message: `confirmation must match email`,
      });
      return;
    }

    console.log(values);
    form.reset();
    setFormSubmitted(true);
    await new Promise((resolve) => {
      setTimeout(resolve, 3200);
    });
    setFormSubmitted(false);
  }

  return formSubmitted === false ? (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 mt-0 w-full"
      >
        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="rounded-xl border-gray-200"
                    placeholder="First name"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="rounded-xl border-gray-200"
                    placeholder="Last name"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="rounded-xl border-gray-200"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Type your question here..."
                  className="resize-none- rounded-xl border-gray-200"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <div className="flex justify-between space-x-14">
          <FormField
            control={form.control}
            name="confirmation"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="rounded-xl border-gray-200"
                    placeholder="Confirm Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <Button
            className="bg-red-600 hover:bg-red-600 rounded-xl text-white px-10-"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  ) : (
    <div className="w-full h-full flex justify-center items-center">
      <p className="text-green-600">We have received your question 🎉</p>
    </div>
  );
}

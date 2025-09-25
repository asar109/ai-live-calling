"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const formSchema = z.object({
  email: z.email({ message: "Enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const SignInPage = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setLoading(true);

      const { data, error } = await authClient.signIn.email(
        {
          email: values.email,
          password: values.password,
          callbackURL: "/dashboard",
          rememberMe: true,
        },
        {
          onSuccess: () => {
            toast.success("Signed in successfully!");
          },
          onError: (err: any) => {
            console.log(err);
            toast.error(err.error.message || "Sign in failed.");
          },
        }
      );

      // if (error) {
      //   toast.error(error.message || "Invalid credentials.");
      // } else {
      //   toast.success("Welcome back!");
      //   console.log("User data:", data);
      // }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-gray-200 w-full h-screen flex items-center justify-center">
      <div className="mx-auto w-full max-w-sm space-y-6 py-10 p-8 bg-gray-100 rounded-lg shadow">
        <h1 className="text-2xl font-bold w-full text-center mb-8">Sign In</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      autoComplete="current-password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <h5 className="text-xs text-center my-6">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </h5>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
};

export default SignInPage;

"use client"

import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from "@/components/ui/form"

import { Button } from "../ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import Link from "next/link"

const FormSchema = z.object({

  username:z.string().min(1,'username is required').max(100),
  email:z.string().min(1,"Email is required").email('Invalid email'), 
  password:z.string().min(1,'Password is required')
  .min(8,'Password must have more that 8 characters'),
  confirmPassword:z.string().min(1,'Password confirmation is required'),
})
.refine((data)=>data.password === data.confirmPassword,{
    path:['confirmPassword'],
    message:"Passwords do not match",
})

const SignUpForm =()=>{
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues:{
        username:'',
        email:'',
        confirmPassword:'',
    }
  });

  const onSubmit=(values:z.infer<typeof FormSchema>)=>{
    console.log(values);
    
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="john doe" {...field} type="name" />
              </FormControl>
              <FormDescription>
                This is your public email
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter email" {...field} type="email" />
              </FormControl>
              <FormDescription>
                This is your public email
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter Password" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Re-Enter password</FormLabel>
              <FormControl>
                <Input placeholder="Re-Enter Password" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <Button type="submit" className="w-full mt-6">
          Register
        </Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow
       before:bg-stone-400 after:ml-4 after:h-px after:flex-grow after:bg-stone-400">
        or
      </div>
      <p className="text-center text-sm text-gray-600 mt-2">
        If you already have an account, please&nbsp;
        <Link href={'/login'} className="hover:underline
        text-blue-600 ">Login</Link>
      </p>
    </Form>
  )
}


export default SignUpForm
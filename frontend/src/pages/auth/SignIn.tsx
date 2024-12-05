import { login } from "@/api/authApi";
import { Card } from "@/components/ui/card";
import CustomFormField from "@/components/utility/customFormField";
import SubmitButton from "@/components/utility/SubmitButton";
import { FormFieldType } from "@/constants/data";
import { LoginSchema } from "@/constants/formSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from 'react-hook-form';
import { Form } from "react-router-dom";
import { z } from "zod";

export default function SignIn() {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
          username: '',
          email: '',
          password: ''
        }
      })
    
      async function onSubmit ({ username, email, password }: z.infer<typeof LoginSchema>) {
        setIsLoading(true)
        const { data, error, isFetched } = useQuery({
          queryFn: () => login()
        })
    
        if (isFetched) {
          setIsLoading(isFetched)
        }
    
        console.log(data)
      }
    return (
        <div className="w-full h-[100vh] p-0 m-0 flex justify-center items-center">
            <Card>
            <Form {...form}>
        <form
          className='flex-1 mb-3 space-y-2'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name={'name'}
          />
          <SubmitButton isLoading={isLoading}>Add Auther</SubmitButton>
        </form>
      </Form>
            </Card>
        </div>
    )
}
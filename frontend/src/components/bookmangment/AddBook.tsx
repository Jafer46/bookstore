import { Form } from '@/components/ui/form'
import SubmitButton from '@/components/utility/SubmitButton'
import CustomFormField from '@/components/utility/customFormField'
import { FormFieldType } from '@/constants/data'
import { BookformSchema } from '@/constants/formSchemas'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export default function AddBookForm () {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const form = useForm<z.infer<typeof BookformSchema>>({
    resolver: zodResolver(BookformSchema),
    defaultValues: {
      name: '',
      descritpion: '',
      cover: '',
      createdAt: new Date(Date.now())
    }
  })

  async function onSubmit (values: z.infer<typeof BookformSchema>) {
    setIsLoading(true)
    console.log(values)
  }

  return (
    <div className='w-full p-4'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='mb-3 space-y-2'>
          {/* <section className='mb-12 space-y-1'>
            <h1 className='text-xl font-bold'>Hi there 👋</h1>
            <p className='text-dark-700'>
              Add your data to the following form for sign up
            </p>
          </section> */}
          <div className='grid grid-cols-1 gap-2'>
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name='name'
              label='Book name'
              placeHolder='ex. Some Book'
              iconSrc=''
            />
            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name='description'
              label='Book Description'
              placeHolder='ex. Some Book'
              iconSrc=''
            />
            {/* <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name='email'
            label='Email'
            placeHolder='ex. 123@gamil.com'
            iconSrc=''
          /> */}
            <CustomFormField
              fieldType={FormFieldType.File}
              control={form.control}
              name='file'
              label='Book File'
              placeHolder='select book file'
              iconSrc=''
            />
            <CustomFormField
              fieldType={FormFieldType.File}
              control={form.control}
              name='cover'
              label='Book Cover'
              placeHolder='select book cover'
              iconSrc=''
            />
          </div>
          <SubmitButton isLoading={isLoading}>Sign up</SubmitButton>
        </form>
      </Form>
    </div>
  )
}

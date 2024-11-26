import { Form } from '@/components/ui/form'
import CustomFormField from '@/components/utility/customFormField'
import { FormFieldType } from '@/constants/data'
import React from 'react'

export default function AddBook () {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex-1 mb-3 space-y-2'
        >
          <section className='mb-12 space-y-1'>
            <h1 className='text-xl font-bold'>Hi there 👋</h1>
            <p className='text-dark-700'>
              Add your data to the following form for sign up
            </p>
          </section>
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name='username'
            label='User name'
            placeHolder='ex. Jafer Hussein'
            iconSrc=''
          />
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name='email'
            label='Email'
            placeHolder='ex. 123@gamil.com'
            iconSrc=''
          />
          <CustomFormField
            fieldType={FormFieldType.PASSWORD}
            control={form.control}
            name='password'
            label='Password'
            placeHolder='ex ....'
            iconSrc=''
          />
          <SubmitButton isLoading={isLoading}>Sign up</SubmitButton>
        </form>
      </Form>
    </div>
  )
}

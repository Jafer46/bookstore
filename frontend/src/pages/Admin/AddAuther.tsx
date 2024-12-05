import { createAuther } from "@/api/autherApit";
import { Form } from "@/components/ui/form";
import SubmitButton from "@/components/utility/SubmitButton";
import CustomFormField from "@/components/utility/customFormField";
import { FormFieldType } from "@/constants/data";
import { AutherformSchema } from "@/constants/formSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function AddAuther() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<z.infer<typeof AutherformSchema>>({
    resolver: zodResolver(AutherformSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit({ name }: z.infer<typeof AutherformSchema>) {
    setIsLoading(true);
    const { data, error, isFetched } = useQuery({
      queryFn: () => createAuther(name),
    });

    if (isFetched) {
      setIsLoading(isFetched);
    }

    console.log(data);
  }
  return (
    <div className="flex justify-center items-center">
      <Form {...form}>
        <form
          className="flex-1 mb-3 space-y-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name={"name"}
          />
          <SubmitButton isLoading={isLoading}>Add Auther</SubmitButton>
        </form>
      </Form>
    </div>
  );
}

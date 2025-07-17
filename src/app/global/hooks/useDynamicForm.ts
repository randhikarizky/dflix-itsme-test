import { DefaultValues, useForm, UseFormReturn } from "react-hook-form";

import { Fields, TypeMap } from "@/app/global/interfaces/form.interface";

export type DynamicFormInterface<F extends Fields[]> = {
  [K in F[number]["name"]]: K extends F[number]["type"]
    ? TypeMap[F[number]["type"]]
    : string;
};

export default function useDynamicForm<F extends Fields[]>(
  fields: F,
): UseFormReturn<DynamicFormInterface<F>> {
  const defaultValues: DefaultValues<DynamicFormInterface<F>> = fields.reduce(
    (acc, field) => {
      acc[field.name as keyof DynamicFormInterface<F>] =
        field.defaultValue;
      return acc;
    },
    {} as DefaultValues<DynamicFormInterface<F>>,
  );
  
  const form = useForm<DynamicFormInterface<F>>({
    defaultValues,
    mode: "onChange",
  });
  
  return form;
}

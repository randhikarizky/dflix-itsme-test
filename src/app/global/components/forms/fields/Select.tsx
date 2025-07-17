import React, { useEffect } from "react";

import {
  Control,
  FieldError,
  FieldErrors,
  UseFormRegister,
  Message,
  ValidationRule,
  UseFormSetValue,
  UseFormWatch,
  RegisterOptions,
  Controller,
} from "react-hook-form";

import {
  Autocomplete,
  Checkbox,
  Chip,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { SelectOption } from "@/app/global/interfaces/form.interface";
import { Icon } from "@/app/global/components";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { styled, useTheme } from "@mui/material/styles";
import { FloatLabel } from "primereact/floatlabel";

const PrimeSelect = styled(Dropdown)(({ theme }) => ({
  transition: "all 0.2s ease-in-out !important",
}));

const PrimeMultiSelect = styled(MultiSelect)(({ theme }) => ({
  transition: "all 0.2s ease-in-out !important",
}));

interface Props {
  watch: UseFormWatch<any>;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  errors: FieldErrors<any>;
  control: Control<any>;
  config: RegisterOptions;

  label: string;
  name: string;
  options: SelectOption[];
  disabled?: boolean;
  required?: Message | ValidationRule<boolean>;
  loading?: boolean;
  multiselect?: boolean;
  helperText?: React.ReactNode;
  size?: TextFieldProps["size"];
  placeholder?: string;

  properties?: Record<string, any>;
}

const Select = (props: Props) => {
  const theme = useTheme();

  useEffect(() => {
    props.register(props.name, { required: props.required });
  }, [props.register]);

  useEffect(() => {
    if (
      props.watch()[props.name] !== "" &&
      props.watch()[props.name] !== undefined &&
      props.watch()[props.name] !== null
    ) {
      props.setValue(props.name, props.watch()[props.name]);
    }
  }, [props.watch()[props.name]]);

  return (
    <FloatLabel>
      <>
        {!props.multiselect ? (
          <>
            <Controller
              name={props.name}
              control={props.control}
              disabled={props.config.disabled}
              render={({ field }) => (
                <PrimeSelect
                  filter
                  showClear={props.properties?.clearable ?? true}
                  showFilterClear
                  resetFilterOnHide
                  options={props.options}
                  invalid={!!props.errors[props.name]}
                  optionLabel="label"
                  optionValue="value"
                  emptyFilterMessage="Tidak ditemukan."
                  emptyMessage="Tidak ada data."
                  placeholder={
                    props.placeholder
                      ? props.placeholder
                      : `Pilih ${props.label}`
                  }
                  variant="outlined"
                  {...field}
                  style={{
                    width: "100%",
                    border: `1px solid ${theme.palette.divider} !important`,
                    color: theme.palette.text.primary,
                  }}
                />
              )}
            />
          </>
        ) : (
          <Controller
            name={props.name}
            control={props.control}
            disabled={props.config.disabled}
            render={({ field }) => (
              <PrimeMultiSelect
                filter
                showClear={props.properties?.clearable ?? true}
                options={props.options}
                invalid={!!props.errors[props.name]}
                emptyFilterMessage="Tidak ditemukan."
                emptyMessage="Tidak ada data."
                display="chip"
                optionLabel="label"
                optionValue="value"
                placeholder={
                  props.placeholder ? props.placeholder : `Pilih ${props.label}`
                }
                variant="outlined"
                {...field}
                style={{
                  width: "100%",
                  border: `1px solid ${theme.palette.divider} !important`,
                  color: theme.palette.text.primary,
                }}
              />
            )}
          />
        )}
      </>
      <label htmlFor={props.name}>{props.label}</label>
    </FloatLabel>
  );
};

export default Select;

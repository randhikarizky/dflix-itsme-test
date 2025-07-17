import React from "react";

import {
  Control,
  Controller,
  UseFormRegister,
  UseFormWatch,
  FieldError,
  FieldErrors,
  UseFormSetValue,
  UseFormReset,
} from "react-hook-form";

import { InputAdornment, TextField, useTheme } from "@mui/material";
import { Grid } from "@mui/system";

import { Fields } from "@/app/global/interfaces/form.interface";
import Icon from "../Icon";
import { useRouter } from "next/router";
import { Select } from "./fields";

interface Props {
  fields: Fields[];
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  setValue: UseFormSetValue<any>;
  control: Control<any>;
  errors: FieldErrors<any>;
  reset: UseFormReset<any>;
  onSubmit: (e?: React.BaseSyntheticEvent) => void;

  loading: boolean;
}

export default function DynamicFilter(props: Props) {
  const router = useRouter();
  const theme = useTheme();

  return (
    <form onSubmit={props.onSubmit}>
      <Grid
        container
        spacing={1}
        justifyContent={
          router.pathname.includes("dashboard") ? "flex-end" : "unset"
        }
      >
        {props.fields &&
          props.fields.map((f, index) => {
            let width: 2 | 4 | 6 = 6;

            switch (f.width) {
              case "small":
                width = 2;
                break;
              case "medium":
                width = 4;
                break;
              case "large":
                width = 6;
                break;
              default:
                width = 6;
                break;
            }

            return (
              <Grid size={width as 2 | 4 | 6} key={f.name + f.type}>
                {((): React.ReactNode => {
                  switch (f.type) {
                    case "email":
                      return <></>;
                    case "password":
                      return <></>;
                    case "radio":
                      return <></>;
                    case "checkbox":
                      return <></>;
                    case "datetext":
                      return <></>;
                    case "dateonly":
                      return <></>;
                    case "datetime":
                      return <></>;
                    case "timeonly":
                      return <></>;
                    case "file":
                      return <></>;
                    case "multifile":
                      return <></>;
                    case "camera":
                      return <></>;
                    case "text":
                      return (
                        <Controller
                          key={f.name + f.type}
                          name={f.name}
                          control={props.control}
                          render={({ field }) => (
                            <TextField
                              fullWidth
                              variant={"outlined"}
                              size={f.properties.size ?? "medium"}
                              label={f.label}
                              {...props.register(f.name, {
                                ...f.config,
                              })}
                              error={!!props.errors[f.name]}
                              helperText={
                                props.errors[f.name]
                                  ? (props.errors[f.name] as FieldError)
                                      ?.message
                                  : (f.properties.helpertext ?? "")
                              }
                              slotProps={{
                                input: {
                                  startAdornment: f.properties.startIcon && (
                                    <InputAdornment position={"start"}>
                                      <Icon icon={f.properties.startIcon} />
                                    </InputAdornment>
                                  ),
                                  endAdornment: f.properties.endIcon && (
                                    <InputAdornment position={"end"}>
                                      <Icon icon={f.properties.endIcon} />
                                    </InputAdornment>
                                  ),
                                },
                              }}
                              required={Boolean(f.config.required)}
                              disabled={f.config.disabled}
                            />
                          )}
                        />
                      );
                    case "number":
                      return (
                        <Controller
                          key={f.name + f.type}
                          name={f.name}
                          control={props.control}
                          render={({ field }) => (
                            <TextField
                              fullWidth
                              variant={"outlined"}
                              label={f.label}
                              size={f.properties.size ?? "medium"}
                              {...props.register(f.name, {
                                ...f.config,
                              })}
                              error={!!props.errors[f.name]}
                              helperText={
                                props.errors[f.name]
                                  ? (props.errors[f.name] as FieldError)
                                      ?.message
                                  : (f.properties.helpertext ?? "")
                              }
                              slotProps={{
                                input: {
                                  type: "number",
                                  startAdornment: f.properties.startIcon && (
                                    <InputAdornment position={"start"}>
                                      <Icon icon={f.properties.startIcon} />
                                    </InputAdornment>
                                  ),
                                  endAdornment: f.properties.endIcon && (
                                    <InputAdornment position={"end"}>
                                      <Icon icon={f.properties.endIcon} />
                                    </InputAdornment>
                                  ),
                                },
                                htmlInput: {
                                  pattern: "[0-9]*",
                                },
                              }}
                              required={Boolean(f.config.required)}
                              disabled={f.config.disabled}
                            />
                          )}
                        />
                      );
                    case "textarea":
                      return (
                        <Controller
                          key={f.name + f.type}
                          name={f.name}
                          control={props.control}
                          render={({ field }) => (
                            <TextField
                              fullWidth
                              multiline
                              rows={f.properties.rows ?? 3}
                              variant={"outlined"}
                              size={f.properties.size ?? "medium"}
                              label={f.label}
                              {...props.register(f.name, {
                                ...f.config,
                              })}
                              error={!!props.errors[f.name]}
                              helperText={
                                props.errors[f.name]
                                  ? (props.errors[f.name] as FieldError)
                                      ?.message
                                  : (f.properties.helpertext ?? "")
                              }
                              required={Boolean(f.config.required)}
                              disabled={f.config.disabled}
                            />
                          )}
                        />
                      );
                    case "texteditor":
                      return <></>;
                    case "textinfo":
                      return <></>;
                    case "select":
                      return (
                        <Select
                          key={f.name + f.type}
                          label={f.label}
                          name={f.name}
                          options={f.properties.options ?? []}
                          register={props.register}
                          control={props.control}
                          setValue={props.setValue}
                          errors={props.errors}
                          watch={props.watch}
                          required={f.config.required ?? false}
                          disabled={f.config.disabled ?? false}
                          loading={f.properties.loading}
                          config={f.config}
                          size={f.properties.size ?? "medium"}
                          placeholder={f.placeholder ?? ""}
                          properties={f.properties}
                        />
                      );
                    case "multiselect":
                      return (
                        <Select
                          key={f.name + f.type}
                          multiselect
                          label={f.label}
                          name={f.name}
                          options={f.properties.options ?? []}
                          register={props.register}
                          control={props.control}
                          setValue={props.setValue}
                          errors={props.errors}
                          watch={props.watch}
                          required={f.config.required ?? false}
                          disabled={f.config.disabled ?? false}
                          loading={f.properties.loading}
                          config={f.config}
                          size={f.properties.size ?? "medium"}
                          placeholder={f.placeholder ?? ""}
                        />
                      );
                    case "asyncselect":
                      return <></>;
                    default:
                      return <></>;
                  }
                })()}
              </Grid>
            );
          })}
      </Grid>
    </form>
  );
}

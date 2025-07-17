import React from "react";
import { RegisterOptions } from "react-hook-form";

export interface SelectOption<T = any> {
  value: any;
  label: string;
  sublabel?: string;
  data?: T;
}

export interface Fields {
  name: string;
  label: string;
  type: keyof TypeMap;
  placeholder: string;
  config: RegisterOptions;
  defaultValue: any;
  width?: "small" | "medium" | "large";
  properties: Record<string, any> & {
    loading?: boolean;
    helpertext?: React.ReactNode;
    startIcon?: string;
    endIcon?: string;
    rows?: number;
    options?: SelectOption[];
    size?: "small" | "medium";
    maxDate?: string;
    minDate?: string;
    dateFormat?: string;
    endpoint?: string;
    customKey?: {
      label: string;
      value: string;
    };
  };
}

export interface TypeMap {
  text: string;
  textarea: string;
  texteditor: string;
  textinfo: string;
  email: string;
  password: string;
  number: string;
  radio: boolean;
  checkbox: boolean;
  daterange: string[];
  datetext: string;
  dateonly: string;
  datetime: string;
  timeonly: string;
  select: string;
  multiselect: any[];
  asyncselect: string;
  asyncmultiselect: any[];
  file: string;
  multifile: string[];
  camera: string;
}

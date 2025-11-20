// src/types/base.types.ts
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Base type definitions for the Next.js project.
 * Includes utility types, React Hook Form types, API response types,
 * table pagination types, and polymorphic component types.
 */

import React, { JSX } from "react";
import {
  Control,
  FieldValues,
  Path,
  FieldErrorsImpl,
  RegisterOptions
} from "react-hook-form";

// Utility type for setting state in React components
export type ISetState<T> = React.Dispatch<React.SetStateAction<T>>;

// Type for SVG icon components, used in components like buttons or Copy
export type ISvgIcon = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string; size?: number | string }
>;

// Interface for controlled form components (e.g., InputField, SelectDropdown)
export interface BaseControlledParameter<TFieldValues extends FieldValues> {
  /**
   * Form validation errors for displaying helper text (e.g., in InputField)
   */
  errors?: Partial<FieldErrorsImpl<TFieldValues>>;
  /**
   * React Hook Form control for managing form state
   */
  control: Control<TFieldValues, any>;
  /**
   * Field name, used as the form input identifier
   */
  name: Path<TFieldValues>;
  /**
   * Validation rules for React Hook Form (e.g., required, pattern)
   */
  rules?: Omit<
    RegisterOptions<TFieldValues, Path<TFieldValues>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

// Type for setTimeout return value, useful for components like Copy (toast timeout)
export type Timeout = ReturnType<typeof setTimeout>;

// Utility type to extract values from an object
export type BaseObjectValue<P extends object> = P[keyof P];

// Utility type to improve type inference for complex objects
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

// Type for select options, used in SelectDropdown component
export type OptionType = {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
  key?: string;
};

// export type OptionType = {
//   label: string;
//   value: string;
// };

// Type for forwardRef components, useful for reusable components like InputField
export type RefType<T, B> = React.ForwardRefExoticComponent<
  Omit<B, "ref"> & React.RefAttributes<T>
>;

// Type for an empty object, useful for default props or empty states
export type EmptyObject = {
  [K in string | number | symbol]: never;
};

// Metadata for table pagination, used in Table component
export type TableMeta = {
  total: number;
  total_pages: number;
  page_size?: number;
  current_page?: number;
  links?: {
    next: null | string;
    previous: null | string;
  };
};

// Alternative table metadata format for pagination
export type ITableMeta = {
  meta?: {
    pagination: {
      page: number;
      pageSize: number;
      total: number;
      numberOfPages: number;
      totalPages: number;
      nextPage: string;
      previousPage: string | null;
    };
  };
};

// Base response type for table data, used with Tanstack Query in Table component
export type BaseTableResponseDto<T> = Prettify<
  { results: Array<T> } & TableMeta & BaseApiSuccess
>;

// Base response type for list data, used with Tanstack Query
export type BaseApiListResponseDto<T> = Prettify<
  {
    data: Array<T>;
  } & BaseApiSuccess
>;

// Query parameters for API requests, used in Tanstack Query
export type BaseQueryParams = {
  search?: string;
  page_size?: number;
  page?: number;
  ordering?: string;
};

// Base API success response structure
export type BaseApiSuccess = {
  success: boolean;
  message: string;
};

// Error response structure for API calls
export type BaseResponseError = {
  message: string;
  field: string;
};

// Base API data response for single data objects
export type BaseApiDataResponse<T> = Prettify<
  {
    data: T;
    error?: BaseResponseError[];
  } & BaseApiSuccess
>;

// Base API payload structure
export type BaseApiPayloadDto<T> = Prettify<{
  payload: T;
}>;

// Base API parameters structure
export type BaseApiParams<T> = {
  params: T;
};

// Utility type to extract props of a React component or intrinsic element
export type PropsOf<C extends React.ElementType> = JSX.LibraryManagedAttributes<
  C,
  React.ComponentPropsWithoutRef<C>
>;

// Props for polymorphic components
type AsProps<C extends React.ElementType> = {
  as?: C;
};

// Utility type to extend and override props
export type ExtendableProps<
  ExtendedProps = Record<string, never>,
  OverrideProps = Record<string, never>
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

// Props for inheritable elements
export type InheritableElementProps<
  C extends React.ElementType,
  Props = unknown
> = ExtendableProps<PropsOf<C>, Props>;

// Props for polymorphic components, used in reusable components like Card
export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = unknown
> = InheritableElementProps<C, Props & AsProps<C>>;

// Ref type for polymorphic components
export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

// Props with ref for polymorphic components
export type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props = unknown
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };

// Type for nullable recursive data, useful for table data
export type NullifiedType<C> = C | null;

// Type for Next.js slug parameters, used in dynamic routes
// export type SlugParams<C extends object> = { params: C };

export type SlugParams<T> = {
  params: T;
};

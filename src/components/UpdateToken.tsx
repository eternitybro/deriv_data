import { FC, PropsWithChildren } from "react";
import {
  Field,
  FieldProps,
  Form,
  Formik,
  FormikErrors,
  FormikTouched,
} from "formik";
import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";

interface FormValues {
  name: string;
  tokenId: number;
}

const UpdateToken: FC<PropsWithChildren<{}>> = () => {
  const validateName = (value: string): string | undefined => {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value.toLowerCase() !== "naruto") {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  };

  const validateTokenId = (value: number): string | undefined => {
    let error;
    if (!value) {
      error = "Token ID is required";
    }
    return error;
  };

  return (
    <Formik
      initialValues={{ name: "Sasuke", tokenId: 10 }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" validate={validateName}>
            {({ field, form }: FieldProps<string>) => (
              <FormControl
                isInvalid={Boolean(form.errors.name && form.touched.name)}
              >
                <FormLabel>First name</FormLabel>
                <Input {...field} placeholder="name" />
                <FormErrorMessage>
                  {form.errors.name && <>{form.errors.name}</>}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="tokenId" validate={validateTokenId}>
            {({ field, form }: FieldProps<number>) => (
              <FormControl
                isInvalid={Boolean(
                  form.errors.tokenId && form.touched.tokenId
                )}
              >
                <FormLabel>Token ID</FormLabel>
                <NumberInput
                  {...field}
                  onChange={(value) => form.setFieldValue("tokenId", value)}
                  onBlur={() => form.setFieldTouched("tokenId")}
                  max={50}
                  min={10}
                  value={field.value}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormErrorMessage>
                  {form.errors.tokenId && <>{form.errors.tokenId}</>}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={false}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateToken;

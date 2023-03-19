import * as React from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'

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
import { BigNumber } from 'ethers';

interface FormValues {
  url: string;
  tokenId: number;
}

const UpdateTokenURI: FC<PropsWithChildren<{}>> = () => {

  // const { write, totalPrice } = useMint(count)
  const [tokenID, setTokenID] = React.useState(0);
  const [tokenURI, setTokenURI] = React.useState('');
  const validateUrl = (value: string): string | undefined => {
    let error;

    if (!value) {
      error = "URL is required";
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

  const { config } = usePrepareContractWrite({
    address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
    abi: [

      {
        inputs: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          },
          {
            internalType: "string",
            name: "newData",
            type: "string"
          }
        ],
        name: "setTokenURI",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }
    ],
    functionName: 'setTokenURI',
    args: [BigNumber.from(tokenID), tokenURI],
    enabled: Boolean(tokenID) && Boolean(tokenURI),
  })
  const { data, write } = useContractWrite(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })
  console.log(tokenID, tokenURI)


  return (
    <div>
      <Formik
        initialValues={{ url: "", tokenId: 0 }}
        onSubmit={(values, actions) => {
          if (write) write()
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="url" validate={validateUrl}>
              {({ field, form }: FieldProps<string>) => (
                <FormControl
                  isInvalid={Boolean(form.errors.url && form.touched.url)}
                >
                  <FormLabel>URL</FormLabel>
                  <Input {...field}
                    onChange={(event) => {
                      form.setFieldValue("url", event.target.value)
                      setTokenURI(event.target.value)
                    }}
                    placeholder="ipfs://example.com" />
                  <FormErrorMessage>
                    {form.errors.url && <>{form.errors.url}</>}
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
                    onChange={(value) => {
                      form.setFieldValue("tokenId", value)
                      setTokenID(parseInt(value) || 0)
                    }}
                    onBlur={() => form.setFieldTouched("tokenId")}
                    max={10000}
                    min={0}
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
              disabled={!write || isLoading}
            >
              {isLoading ? 'Updating...' : 'Set Token URI'}
              {write?.toString()}
            </Button>
            {isSuccess && (
              <div>
                Successfully updated your metadata!
                <div>
                  <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
                </div>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default UpdateTokenURI

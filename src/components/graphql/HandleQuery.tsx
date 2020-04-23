import * as React from "react";
import { ApolloError } from "apollo-client";
import { Loader } from 'rsuite';

export type HandleQueryProps = {
  loading: boolean;
  error?: ApolloError
}

export const HandleQuery: React.FC<HandleQueryProps> = ({ loading, error, children }) => {

  return (
    <>
      { loading && <Loader center={ true } backdrop={true} size="md" content="loading..."/> }
      { children }
    </>
  );
}

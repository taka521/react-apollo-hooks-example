import { GraphQLError } from "graphql";
import { ErrorCode } from "./ErrorCode";

export type ExtensionsType = {
  code: ErrorCode;
} & GraphQLError["extensions"];

export type BadInputErrorExtensions = {
  code: "BAD_USER_ERROR";
  attribute: string[];
};

export type UnauthenticatedExtensions = {
  code: "UNAUTHENTICATED";
  reason: "Expired" | "Freezing" | "NotExist";
};

export type Extensions =
  | BadInputErrorExtensions
  | UnauthenticatedExtensions
  | ExtensionsType;

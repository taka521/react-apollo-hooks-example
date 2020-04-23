import { GraphQLError } from "graphql";
import { ErrorCode } from "./ErrorCode";

export type ExtensionsType = {
  code: ErrorCode;
} & GraphQLError["extensions"];

export interface BadInputErrorExtensions extends ExtensionsType {
  code: "BAD_USER_ERROR";
  attribute: string[];
}

export interface UnauthenticatedExtensions extends ExtensionsType {
  code: "UNAUTHENTICATED";
  reason: "Expired" | "Freezing" | "NotExist";
}

export type Extensions =
  | BadInputErrorExtensions
  | UnauthenticatedExtensions
  | ExtensionsType;

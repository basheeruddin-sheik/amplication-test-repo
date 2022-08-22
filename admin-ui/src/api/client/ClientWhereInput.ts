import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClientWhereInput = {
  accessTokenExpiresIn?: StringNullableFilter;
  clientId?: StringFilter;
  clientName?: StringNullableFilter;
  clientSecret?: StringNullableFilter;
  id?: StringFilter;
};

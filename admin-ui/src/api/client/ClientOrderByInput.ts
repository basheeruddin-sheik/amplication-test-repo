import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  accessTokenExpiresIn?: SortOrder;
  clientId?: SortOrder;
  clientName?: SortOrder;
  clientSecret?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};

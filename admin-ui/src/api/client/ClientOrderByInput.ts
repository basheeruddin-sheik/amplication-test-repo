import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};

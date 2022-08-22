import { Client as TClient } from "../api/client/Client";

export const CLIENT_TITLE_FIELD = "clientName";

export const ClientTitle = (record: TClient): string => {
  return record.clientName || record.id;
};

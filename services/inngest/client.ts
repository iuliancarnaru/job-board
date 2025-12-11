import {
  DeletedObjectJSON,
  UserJSON,
  OrganizationJSON,
  OrganizationMembershipJSON,
} from "@clerk/nextjs/server";
import { EventSchemas, Inngest } from "inngest";

type ClerkWebhookData<T> = {
  data: {
    data: T;
    raw: string;
    headers: Record<string, string>;
  };
};

type Events = {
  "clerk/user.created": ClerkWebhookData<UserJSON>;
  "clerk/user.updated": ClerkWebhookData<UserJSON>;
  "clerk/user.deleted": ClerkWebhookData<DeletedObjectJSON>;
  "clerk/organization.created": ClerkWebhookData<OrganizationJSON>;
  "clerk/organization.updated": ClerkWebhookData<OrganizationJSON>;
  "clerk/organization.deleted": ClerkWebhookData<DeletedObjectJSON>;
  "clerk/organizationMembership.created": ClerkWebhookData<OrganizationMembershipJSON>;
  "clerk/organizationMembership.deleted": ClerkWebhookData<OrganizationMembershipJSON>;
};

export const inngest = new Inngest({
  id: "job-board",
  schemas: new EventSchemas().fromRecord<Events>(),
});

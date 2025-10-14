import { db } from "@/drizzle/db";
import { UserNotificationSettingsTable } from "@/drizzle/schema";
import { revalidateUserNotificationSettings } from "./cache/user-notification-settings";

export async function insertUserNotificationSettings(
  settings: typeof UserNotificationSettingsTable.$inferInsert
) {
  await db
    .insert(UserNotificationSettingsTable)
    .values(settings)
    .onConflictDoNothing();

  revalidateUserNotificationSettings(settings.userId);
}

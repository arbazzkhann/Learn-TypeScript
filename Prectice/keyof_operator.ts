// ────────────────────────────────────────── keyof operator
// used to extract the property names (keys) of an object type as a union of string or numeric literal types.

interface UserSettings {
  username: string;
  email: string;
  notificationsEnabled: boolean;
}

// SettingKey is a union type: "username" | "email" | "notificationsEnabled"
type SettingKey = keyof UserSettings;

const mySetting: SettingKey = "username";
console.log(mySetting);

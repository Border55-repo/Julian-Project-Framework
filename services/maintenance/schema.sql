CREATE TABLE `maintenance_state` (
  `id` integer PRIMARY KEY NOT NULL,
  `all_projects` integer DEFAULT false NOT NULL,
  `project_keys` text DEFAULT '[]' NOT NULL,
  `message` text DEFAULT 'Vi gjør en kort teknisk oppdatering. Prøv igjen om litt.' NOT NULL,
  `until` text,
  `updated_at` text NOT NULL
);

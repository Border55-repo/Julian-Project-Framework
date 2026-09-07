export async function getMaintenanceState(projectKey, endpoint = "https://julian-project-maintenance.juliannordli.chatgpt.site/api/maintenance") {
  try {
    const response = await fetch(`${endpoint}?t=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) return null;
    const state = await response.json();
    const active = state?.active && (state.all || state.projects?.includes(projectKey));
    const valid = !state.until || Date.parse(state.until) > Date.now();
    return active && valid ? state : null;
  } catch {
    return null;
  }
}

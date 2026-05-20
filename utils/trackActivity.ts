type ActivityMetadata = Record<
  string,
  string | number | boolean | null
>;

export async function trackActivity(
  event: string,
  path: string,
  metadata?: ActivityMetadata
) {
  try {
    await fetch(
      "https://legal.lumminalaw.com/api/activity",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event,
          path,
          metadata,
        }),
      }
    );
  } catch (error) {
    console.error(
      "Activity tracking failed",
      error
    );
  }
}
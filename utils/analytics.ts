// utils/analytics.ts

type ActivityMetadata = Record<
  string,
  unknown
>;

const API_URL =
  "https://legal.lumminalaw.com/api/activity";

function getOrCreateStorageValue(
  key: string
) {
  if (typeof window === "undefined")
    return "";

  let value =
    localStorage.getItem(key);

  if (!value) {
    value = crypto.randomUUID();

    localStorage.setItem(
      key,
      value
    );
  }

  return value;
}

function getVisitorId() {
  return getOrCreateStorageValue(
    "lummina_visitor_id"
  );
}

function getSessionId() {
  const SESSION_KEY =
    "lummina_session_id";

  if (typeof window === "undefined")
    return "";

  let sessionId =
    sessionStorage.getItem(
      SESSION_KEY
    );

  if (!sessionId) {
    sessionId = crypto.randomUUID();

    sessionStorage.setItem(
      SESSION_KEY,
      sessionId
    );
  }

  return sessionId;
}

export async function trackActivity(
  event: string,
  path: string,
  metadata?: ActivityMetadata
) {
  try {
    const payload = {
      event,
      path,

      metadata: {
        ...metadata,

        visitorId:
          getVisitorId(),

        sessionId:
          getSessionId(),

        screen: `${window.innerWidth}x${window.innerHeight}`,

        language:
          navigator.language,

        timezone:
          Intl.DateTimeFormat()
            .resolvedOptions()
            .timeZone,

        title: document.title,

        source: "website",
      },
    };

    await fetch(API_URL, {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(
        payload
      ),

      keepalive: true,
    });
  } catch (error) {
    console.error(
      "Activity tracking failed",
      error
    );
  }
}
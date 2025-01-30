"use client";

import Config from "@/src/Config.ts";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { ReactElement } from "react";

export default function Analytics(): ReactElement {
    return <GoogleAnalytics gaMeasurementId={Config.google.analytics.measurementId} trackPageViews />;
}

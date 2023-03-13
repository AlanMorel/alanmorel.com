"use client";

import Config from "@/src/Config";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function Analytics(): JSX.Element {
    return <GoogleAnalytics gaMeasurementId={Config.google.analytics.measurementId} trackPageViews />;
}

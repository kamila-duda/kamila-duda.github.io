import { useEffect } from "react";
import { Analytics } from "@shared/analytics";
import { NextRouter } from "next/router";

interface customWindow extends Window {
  GA_INITIALIZED?: any;
}
declare const window: customWindow;

export const useGaInit = (router: NextRouter) => {
  const { logPageView, initGA } = Analytics();
  useEffect(() => {
    if (!globalThis.window) return;

    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }

    const handleRouteChange = (url: string) => {
      logPageView(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      if (globalThis.window) return;
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, initGA, logPageView]);
};

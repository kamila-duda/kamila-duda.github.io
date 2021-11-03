import ReactGA from "react-ga";

const GA_TRACKING_ID = "G-VHNBR2HVXH";

export const Analytics = () => {
  const initGA = () => {
    ReactGA.initialize(GA_TRACKING_ID);
  };

  const logPageView = (url: string) => {
    ReactGA.set({ page: url });
    ReactGA.pageview(url);
  };

  const logEvent = (category = "", action = "", label = "") => {
    if (category && action) {
      ReactGA.event({ category, action, label });
    }
  };

  return { initGA, logPageView, logEvent };
};

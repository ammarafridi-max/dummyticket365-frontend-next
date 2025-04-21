import ReactGA from 'react-ga4';
import { Analytics } from 'analytics';
import googleTagManager from '@analytics/google-tag-manager';

export const analytics = Analytics({
  app: 'dummy-ticket-365',
  plugins: [
    googleTagManager({
      containerId: 'GTM-WGH99TBJ',
    }),
  ],
});

export function initializeGA() {
  ReactGA.initialize(process.env.REACT_APP_GA4_MEASUREMENT_ID);
}

export const trackPurchaseEvent = (currency, value, transactionId) => {
  ReactGA.event('dummy_ticket_purchase', {
    currency,
    value,
    transactionId,
  });
};

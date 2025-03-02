import { loadStripe } from '@stripe/stripe-js';
export const stripe = loadStripe(
  'pk_test_51QxG7f2NHoA1EHRjkQ1M2jzVtLq7SzWywld5sJSHhNdSBQPBbsZ2wR39yyVnOxvdIaEC0Ukbz2WlQDh4YTTrhH2h00uZz72kCD',
  {
    betas: ['custom_checkout_beta_5'],
  },
);

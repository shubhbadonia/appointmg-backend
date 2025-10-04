// backend/paypalClient.js
import paypal from '@paypal/checkout-server-sdk';

function createPayPalClient() {
  const environment = new paypal.core.SandboxEnvironment(
    process.env.PAYPAL_CLIENT_ID,
    process.env.PAYPAL_CLIENT_SECRET
  );
  return new paypal.core.PayPalHttpClient(environment);
}

export default createPayPalClient;

import { createSuccessMessage } from './utils/aws';

export function getMyWallet(event, context, callback) {
  callback(null, createSuccessMessage({ method: 'getMyWallet' }));
}

export function getMarkets(event, context, callback) {
  callback(null, createSuccessMessage({ method: 'getMarkets' }));
}

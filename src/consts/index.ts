import { normalizeSuiAddress } from '@/vendor/sui/utils';

export * from './config.js';

// Backwards-compatible default (keeps existing behavior)
export const DUMMY_ADDRESS = normalizeSuiAddress('0x0');

// New alias for Aptos-style usage while we migrate internals.
// This intentionally re-uses the Sui normalizer for now so it is
// non-destructive; later this can be swapped to an Aptos-specific
// implementation when the external Aptos SDK is integrated.
export const normalizeAptosAddress = normalizeSuiAddress;
export const APTOS_DUMMY_ADDRESS = normalizeAptosAddress('0x0');

export const FLOAT_OFFSET = 10n ** 9n;
export const DOUBLE_OFFSET = 10n ** 18n;

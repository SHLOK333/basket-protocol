// Lightweight chain adapter helpers to centralize "sui -> aptos" migration
// This file is intentionally small and non-destructive: it provides
// mapping helpers and constants so the rest of the codebase can start
// referencing `aptos` symbols without breaking existing Sui-based
// runtime bindings. Later we can replace the internals with real
// Aptos SDK calls.

export const TARGET_CHAIN = 'aptos';

/**
 * Map a Move-style coin type string from Sui to Aptos by replacing
 * the module segment `::sui::` with `::aptos::`.
 * If the incoming type doesn't contain `::sui::`, it is returned
 * unchanged.
 */
export function mapCoinTypeToTarget(coinType: string): string {
  if (!coinType) return coinType;
  return coinType.replace(/::sui::/g, '::aptos::');
}

/**
 * A helper to convert a list of coin types to the target chain's
 * representation. This is useful for docs and adapters while we
 * transition generated types.
 */
export function mapCoinTypesToTarget(coinTypes: string[] | undefined) {
  if (!coinTypes) return coinTypes;
  return coinTypes.map((t) => mapCoinTypeToTarget(t));
}

export default {
  TARGET_CHAIN,
  mapCoinTypeToTarget,
  mapCoinTypesToTarget,
};

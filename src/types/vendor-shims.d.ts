// Minimal ambient declarations to quiet missing-type errors for vendor shims

// Any imports that try to reach the real Mysten packages will be treated as 'any'.
declare module '@mysten/sui' {
  const _default: any;
  export = _default;
}

declare module '@mysten/sui/*' {
  const _default: any;
  export = _default;
}

// Declarations for generated aptos adapter JS files imported via relative paths like
// './deps/aptos/object.js' or './deps/aptos/vec_map.js'.
// The wildcard should match those relative imports from within generated modules.
declare module '*/deps/aptos/*' {
  const content: any;
  export = content;
}

// Also accept imports to local vendor shims via path-mapped specifiers
declare module '@/vendor/sui/*' {
  const content: any;
  export = content;
}

declare module '@/vendor/sui' {
  const content: any;
  export = content;
}

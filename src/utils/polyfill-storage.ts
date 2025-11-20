/* eslint-disable @typescript-eslint/no-explicit-any */
if (typeof window === "undefined") {
  // Server-side: Mock localStorage to prevent errors
  const mockStorage: Storage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    key: () => null,
    length: 0,
  };

  (globalThis as any).localStorage = mockStorage;
}
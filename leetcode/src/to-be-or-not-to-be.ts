type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

export function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (item) => {
      if (item === val) return true;
      throw new Error('Not Equal')
    },
    notToBe: item => {
      if (item !== val) return true;
      throw new Error('Equal')
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
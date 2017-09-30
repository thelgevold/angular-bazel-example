
import { Cmp8562Component } from './cmp';
describe('Cmp8562Component', () => {
  it('should add', () => {
    expect(new Cmp8562Component().add8562(1)).toBe(8563);
  });
});
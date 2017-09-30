
import { Cmp8232Component } from './cmp';
describe('Cmp8232Component', () => {
  it('should add', () => {
    expect(new Cmp8232Component().add8232(1)).toBe(8233);
  });
});

import { Cmp8204Component } from './cmp';
describe('Cmp8204Component', () => {
  it('should add', () => {
    expect(new Cmp8204Component().add8204(1)).toBe(8205);
  });
});
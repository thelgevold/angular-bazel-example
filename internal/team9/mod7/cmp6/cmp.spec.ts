
import { Cmp8976Component } from './cmp';
describe('Cmp8976Component', () => {
  it('should add', () => {
    expect(new Cmp8976Component().add8976(1)).toBe(8977);
  });
});
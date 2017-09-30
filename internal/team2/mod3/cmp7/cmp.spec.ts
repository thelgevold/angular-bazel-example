
import { Cmp8237Component } from './cmp';
describe('Cmp8237Component', () => {
  it('should add', () => {
    expect(new Cmp8237Component().add8237(1)).toBe(8238);
  });
});
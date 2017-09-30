
import { Cmp8590Component } from './cmp';
describe('Cmp8590Component', () => {
  it('should add', () => {
    expect(new Cmp8590Component().add8590(1)).toBe(8591);
  });
});
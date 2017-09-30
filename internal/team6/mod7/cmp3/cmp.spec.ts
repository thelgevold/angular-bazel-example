
import { Cmp8673Component } from './cmp';
describe('Cmp8673Component', () => {
  it('should add', () => {
    expect(new Cmp8673Component().add8673(1)).toBe(8674);
  });
});
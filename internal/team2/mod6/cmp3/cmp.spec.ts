
import { Cmp8263Component } from './cmp';
describe('Cmp8263Component', () => {
  it('should add', () => {
    expect(new Cmp8263Component().add8263(1)).toBe(8264);
  });
});
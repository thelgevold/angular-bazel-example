
import { Cmp8503Component } from './cmp';
describe('Cmp8503Component', () => {
  it('should add', () => {
    expect(new Cmp8503Component().add8503(1)).toBe(8504);
  });
});
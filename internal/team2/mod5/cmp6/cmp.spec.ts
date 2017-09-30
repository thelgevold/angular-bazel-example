
import { Cmp8256Component } from './cmp';
describe('Cmp8256Component', () => {
  it('should add', () => {
    expect(new Cmp8256Component().add8256(1)).toBe(8257);
  });
});
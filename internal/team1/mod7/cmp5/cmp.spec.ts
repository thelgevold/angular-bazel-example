
import { Cmp8175Component } from './cmp';
describe('Cmp8175Component', () => {
  it('should add', () => {
    expect(new Cmp8175Component().add8175(1)).toBe(8176);
  });
});
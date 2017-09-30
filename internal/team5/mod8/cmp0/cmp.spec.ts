
import { Cmp8580Component } from './cmp';
describe('Cmp8580Component', () => {
  it('should add', () => {
    expect(new Cmp8580Component().add8580(1)).toBe(8581);
  });
});
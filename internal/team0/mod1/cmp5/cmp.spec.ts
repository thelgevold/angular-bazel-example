
import { Cmp8015Component } from './cmp';
describe('Cmp8015Component', () => {
  it('should add', () => {
    expect(new Cmp8015Component().add8015(1)).toBe(8016);
  });
});
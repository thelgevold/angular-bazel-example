
import { Cmp8515Component } from './cmp';
describe('Cmp8515Component', () => {
  it('should add', () => {
    expect(new Cmp8515Component().add8515(1)).toBe(8516);
  });
});

import { Cmp8852Component } from './cmp';
describe('Cmp8852Component', () => {
  it('should add', () => {
    expect(new Cmp8852Component().add8852(1)).toBe(8853);
  });
});
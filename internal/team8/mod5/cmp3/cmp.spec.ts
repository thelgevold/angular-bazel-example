
import { Cmp8853Component } from './cmp';
describe('Cmp8853Component', () => {
  it('should add', () => {
    expect(new Cmp8853Component().add8853(1)).toBe(8854);
  });
});
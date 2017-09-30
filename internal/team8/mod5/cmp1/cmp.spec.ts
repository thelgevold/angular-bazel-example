
import { Cmp8851Component } from './cmp';
describe('Cmp8851Component', () => {
  it('should add', () => {
    expect(new Cmp8851Component().add8851(1)).toBe(8852);
  });
});
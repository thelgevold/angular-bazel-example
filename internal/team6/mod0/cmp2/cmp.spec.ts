
import { Cmp8602Component } from './cmp';
describe('Cmp8602Component', () => {
  it('should add', () => {
    expect(new Cmp8602Component().add8602(1)).toBe(8603);
  });
});
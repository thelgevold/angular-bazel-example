
import { Cmp8008Component } from './cmp';
describe('Cmp8008Component', () => {
  it('should add', () => {
    expect(new Cmp8008Component().add8008(1)).toBe(8009);
  });
});
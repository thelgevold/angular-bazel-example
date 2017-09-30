
import { Cmp8395Component } from './cmp';
describe('Cmp8395Component', () => {
  it('should add', () => {
    expect(new Cmp8395Component().add8395(1)).toBe(8396);
  });
});

import { Cmp8531Component } from './cmp';
describe('Cmp8531Component', () => {
  it('should add', () => {
    expect(new Cmp8531Component().add8531(1)).toBe(8532);
  });
});
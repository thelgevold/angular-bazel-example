
import { Cmp8022Component } from './cmp';
describe('Cmp8022Component', () => {
  it('should add', () => {
    expect(new Cmp8022Component().add8022(1)).toBe(8023);
  });
});
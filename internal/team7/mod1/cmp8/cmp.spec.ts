
import { Cmp8718Component } from './cmp';
describe('Cmp8718Component', () => {
  it('should add', () => {
    expect(new Cmp8718Component().add8718(1)).toBe(8719);
  });
});
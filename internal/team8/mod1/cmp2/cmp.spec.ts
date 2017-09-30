
import { Cmp8812Component } from './cmp';
describe('Cmp8812Component', () => {
  it('should add', () => {
    expect(new Cmp8812Component().add8812(1)).toBe(8813);
  });
});

import { Cmp8261Component } from './cmp';
describe('Cmp8261Component', () => {
  it('should add', () => {
    expect(new Cmp8261Component().add8261(1)).toBe(8262);
  });
});
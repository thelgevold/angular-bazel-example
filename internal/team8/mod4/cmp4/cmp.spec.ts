
import { Cmp8844Component } from './cmp';
describe('Cmp8844Component', () => {
  it('should add', () => {
    expect(new Cmp8844Component().add8844(1)).toBe(8845);
  });
});
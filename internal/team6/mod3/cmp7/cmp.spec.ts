
import { Cmp8637Component } from './cmp';
describe('Cmp8637Component', () => {
  it('should add', () => {
    expect(new Cmp8637Component().add8637(1)).toBe(8638);
  });
});
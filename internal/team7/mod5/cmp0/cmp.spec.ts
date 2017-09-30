
import { Cmp8750Component } from './cmp';
describe('Cmp8750Component', () => {
  it('should add', () => {
    expect(new Cmp8750Component().add8750(1)).toBe(8751);
  });
});

import { Cmp8845Component } from './cmp';
describe('Cmp8845Component', () => {
  it('should add', () => {
    expect(new Cmp8845Component().add8845(1)).toBe(8846);
  });
});
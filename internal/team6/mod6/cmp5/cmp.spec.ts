
import { Cmp8665Component } from './cmp';
describe('Cmp8665Component', () => {
  it('should add', () => {
    expect(new Cmp8665Component().add8665(1)).toBe(8666);
  });
});
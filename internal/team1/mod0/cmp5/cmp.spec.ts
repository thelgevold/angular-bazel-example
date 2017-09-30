
import { Cmp8105Component } from './cmp';
describe('Cmp8105Component', () => {
  it('should add', () => {
    expect(new Cmp8105Component().add8105(1)).toBe(8106);
  });
});
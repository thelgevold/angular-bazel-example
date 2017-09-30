
import { Cmp8526Component } from './cmp';
describe('Cmp8526Component', () => {
  it('should add', () => {
    expect(new Cmp8526Component().add8526(1)).toBe(8527);
  });
});

import { Cmp8645Component } from './cmp';
describe('Cmp8645Component', () => {
  it('should add', () => {
    expect(new Cmp8645Component().add8645(1)).toBe(8646);
  });
});
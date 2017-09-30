
import { Cmp8386Component } from './cmp';
describe('Cmp8386Component', () => {
  it('should add', () => {
    expect(new Cmp8386Component().add8386(1)).toBe(8387);
  });
});
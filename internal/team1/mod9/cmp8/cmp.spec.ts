
import { Cmp8198Component } from './cmp';
describe('Cmp8198Component', () => {
  it('should add', () => {
    expect(new Cmp8198Component().add8198(1)).toBe(8199);
  });
});
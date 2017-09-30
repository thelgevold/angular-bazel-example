
import { Cmp8318Component } from './cmp';
describe('Cmp8318Component', () => {
  it('should add', () => {
    expect(new Cmp8318Component().add8318(1)).toBe(8319);
  });
});
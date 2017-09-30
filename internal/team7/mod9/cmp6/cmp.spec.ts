
import { Cmp8796Component } from './cmp';
describe('Cmp8796Component', () => {
  it('should add', () => {
    expect(new Cmp8796Component().add8796(1)).toBe(8797);
  });
});
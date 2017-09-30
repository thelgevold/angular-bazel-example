
import { Cmp8758Component } from './cmp';
describe('Cmp8758Component', () => {
  it('should add', () => {
    expect(new Cmp8758Component().add8758(1)).toBe(8759);
  });
});
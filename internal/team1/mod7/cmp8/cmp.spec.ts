
import { Cmp8178Component } from './cmp';
describe('Cmp8178Component', () => {
  it('should add', () => {
    expect(new Cmp8178Component().add8178(1)).toBe(8179);
  });
});
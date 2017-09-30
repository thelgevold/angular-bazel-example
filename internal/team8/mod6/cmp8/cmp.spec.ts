
import { Cmp8868Component } from './cmp';
describe('Cmp8868Component', () => {
  it('should add', () => {
    expect(new Cmp8868Component().add8868(1)).toBe(8869);
  });
});
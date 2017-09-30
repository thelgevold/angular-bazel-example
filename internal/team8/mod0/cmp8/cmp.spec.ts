
import { Cmp8808Component } from './cmp';
describe('Cmp8808Component', () => {
  it('should add', () => {
    expect(new Cmp8808Component().add8808(1)).toBe(8809);
  });
});
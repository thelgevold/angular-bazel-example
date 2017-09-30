
import { Cmp8572Component } from './cmp';
describe('Cmp8572Component', () => {
  it('should add', () => {
    expect(new Cmp8572Component().add8572(1)).toBe(8573);
  });
});
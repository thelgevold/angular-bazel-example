
import { Cmp8743Component } from './cmp';
describe('Cmp8743Component', () => {
  it('should add', () => {
    expect(new Cmp8743Component().add8743(1)).toBe(8744);
  });
});
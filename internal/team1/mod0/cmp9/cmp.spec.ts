
import { Cmp8109Component } from './cmp';
describe('Cmp8109Component', () => {
  it('should add', () => {
    expect(new Cmp8109Component().add8109(1)).toBe(8110);
  });
});
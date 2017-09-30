
import { Cmp8080Component } from './cmp';
describe('Cmp8080Component', () => {
  it('should add', () => {
    expect(new Cmp8080Component().add8080(1)).toBe(8081);
  });
});
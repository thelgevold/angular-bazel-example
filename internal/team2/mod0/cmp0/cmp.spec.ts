
import { Cmp8200Component } from './cmp';
describe('Cmp8200Component', () => {
  it('should add', () => {
    expect(new Cmp8200Component().add8200(1)).toBe(8201);
  });
});
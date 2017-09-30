
import { Cmp8340Component } from './cmp';
describe('Cmp8340Component', () => {
  it('should add', () => {
    expect(new Cmp8340Component().add8340(1)).toBe(8341);
  });
});
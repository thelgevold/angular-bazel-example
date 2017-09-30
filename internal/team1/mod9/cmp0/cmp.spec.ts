
import { Cmp8190Component } from './cmp';
describe('Cmp8190Component', () => {
  it('should add', () => {
    expect(new Cmp8190Component().add8190(1)).toBe(8191);
  });
});
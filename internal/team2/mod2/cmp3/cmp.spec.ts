
import { Cmp8223Component } from './cmp';
describe('Cmp8223Component', () => {
  it('should add', () => {
    expect(new Cmp8223Component().add8223(1)).toBe(8224);
  });
});
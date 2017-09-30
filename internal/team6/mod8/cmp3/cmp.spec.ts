
import { Cmp8683Component } from './cmp';
describe('Cmp8683Component', () => {
  it('should add', () => {
    expect(new Cmp8683Component().add8683(1)).toBe(8684);
  });
});
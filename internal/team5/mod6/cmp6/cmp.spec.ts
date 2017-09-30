
import { Cmp8566Component } from './cmp';
describe('Cmp8566Component', () => {
  it('should add', () => {
    expect(new Cmp8566Component().add8566(1)).toBe(8567);
  });
});
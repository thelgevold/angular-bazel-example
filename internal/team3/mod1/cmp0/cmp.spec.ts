
import { Cmp8310Component } from './cmp';
describe('Cmp8310Component', () => {
  it('should add', () => {
    expect(new Cmp8310Component().add8310(1)).toBe(8311);
  });
});
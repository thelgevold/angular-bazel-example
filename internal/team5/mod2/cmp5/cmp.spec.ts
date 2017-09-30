
import { Cmp8525Component } from './cmp';
describe('Cmp8525Component', () => {
  it('should add', () => {
    expect(new Cmp8525Component().add8525(1)).toBe(8526);
  });
});
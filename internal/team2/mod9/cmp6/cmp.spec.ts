
import { Cmp8296Component } from './cmp';
describe('Cmp8296Component', () => {
  it('should add', () => {
    expect(new Cmp8296Component().add8296(1)).toBe(8297);
  });
});
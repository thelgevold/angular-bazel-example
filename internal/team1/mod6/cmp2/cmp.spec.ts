
import { Cmp8162Component } from './cmp';
describe('Cmp8162Component', () => {
  it('should add', () => {
    expect(new Cmp8162Component().add8162(1)).toBe(8163);
  });
});
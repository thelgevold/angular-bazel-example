
import { Cmp8654Component } from './cmp';
describe('Cmp8654Component', () => {
  it('should add', () => {
    expect(new Cmp8654Component().add8654(1)).toBe(8655);
  });
});
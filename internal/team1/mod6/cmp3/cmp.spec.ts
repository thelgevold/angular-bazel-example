
import { Cmp8163Component } from './cmp';
describe('Cmp8163Component', () => {
  it('should add', () => {
    expect(new Cmp8163Component().add8163(1)).toBe(8164);
  });
});
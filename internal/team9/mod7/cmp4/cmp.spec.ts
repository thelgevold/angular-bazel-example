
import { Cmp8974Component } from './cmp';
describe('Cmp8974Component', () => {
  it('should add', () => {
    expect(new Cmp8974Component().add8974(1)).toBe(8975);
  });
});
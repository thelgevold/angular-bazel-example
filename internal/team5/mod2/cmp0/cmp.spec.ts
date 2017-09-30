
import { Cmp8520Component } from './cmp';
describe('Cmp8520Component', () => {
  it('should add', () => {
    expect(new Cmp8520Component().add8520(1)).toBe(8521);
  });
});
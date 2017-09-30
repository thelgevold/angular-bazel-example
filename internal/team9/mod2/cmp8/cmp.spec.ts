
import { Cmp8928Component } from './cmp';
describe('Cmp8928Component', () => {
  it('should add', () => {
    expect(new Cmp8928Component().add8928(1)).toBe(8929);
  });
});
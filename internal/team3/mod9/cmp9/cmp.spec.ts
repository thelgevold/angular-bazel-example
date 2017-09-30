
import { Cmp8399Component } from './cmp';
describe('Cmp8399Component', () => {
  it('should add', () => {
    expect(new Cmp8399Component().add8399(1)).toBe(8400);
  });
});
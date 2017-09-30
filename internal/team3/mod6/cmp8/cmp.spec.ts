
import { Cmp8368Component } from './cmp';
describe('Cmp8368Component', () => {
  it('should add', () => {
    expect(new Cmp8368Component().add8368(1)).toBe(8369);
  });
});
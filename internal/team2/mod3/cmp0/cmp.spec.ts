
import { Cmp8230Component } from './cmp';
describe('Cmp8230Component', () => {
  it('should add', () => {
    expect(new Cmp8230Component().add8230(1)).toBe(8231);
  });
});
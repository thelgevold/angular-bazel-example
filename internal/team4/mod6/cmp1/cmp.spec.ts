
import { Cmp8461Component } from './cmp';
describe('Cmp8461Component', () => {
  it('should add', () => {
    expect(new Cmp8461Component().add8461(1)).toBe(8462);
  });
});
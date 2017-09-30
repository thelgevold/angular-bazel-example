
import { Cmp8380Component } from './cmp';
describe('Cmp8380Component', () => {
  it('should add', () => {
    expect(new Cmp8380Component().add8380(1)).toBe(8381);
  });
});
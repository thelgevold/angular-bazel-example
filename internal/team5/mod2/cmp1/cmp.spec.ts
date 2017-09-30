
import { Cmp8521Component } from './cmp';
describe('Cmp8521Component', () => {
  it('should add', () => {
    expect(new Cmp8521Component().add8521(1)).toBe(8522);
  });
});

import { Cmp8803Component } from './cmp';
describe('Cmp8803Component', () => {
  it('should add', () => {
    expect(new Cmp8803Component().add8803(1)).toBe(8804);
  });
});

import { Cmp8855Component } from './cmp';
describe('Cmp8855Component', () => {
  it('should add', () => {
    expect(new Cmp8855Component().add8855(1)).toBe(8856);
  });
});
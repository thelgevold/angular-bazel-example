
import { Cmp8995Component } from './cmp';
describe('Cmp8995Component', () => {
  it('should add', () => {
    expect(new Cmp8995Component().add8995(1)).toBe(8996);
  });
});
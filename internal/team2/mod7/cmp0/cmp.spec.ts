
import { Cmp8270Component } from './cmp';
describe('Cmp8270Component', () => {
  it('should add', () => {
    expect(new Cmp8270Component().add8270(1)).toBe(8271);
  });
});
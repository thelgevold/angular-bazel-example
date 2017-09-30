
import { Cmp8185Component } from './cmp';
describe('Cmp8185Component', () => {
  it('should add', () => {
    expect(new Cmp8185Component().add8185(1)).toBe(8186);
  });
});

import { Cmp8036Component } from './cmp';
describe('Cmp8036Component', () => {
  it('should add', () => {
    expect(new Cmp8036Component().add8036(1)).toBe(8037);
  });
});
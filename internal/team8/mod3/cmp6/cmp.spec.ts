
import { Cmp8836Component } from './cmp';
describe('Cmp8836Component', () => {
  it('should add', () => {
    expect(new Cmp8836Component().add8836(1)).toBe(8837);
  });
});
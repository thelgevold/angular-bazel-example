
import { Cmp8970Component } from './cmp';
describe('Cmp8970Component', () => {
  it('should add', () => {
    expect(new Cmp8970Component().add8970(1)).toBe(8971);
  });
});
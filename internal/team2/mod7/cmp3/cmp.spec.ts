
import { Cmp8273Component } from './cmp';
describe('Cmp8273Component', () => {
  it('should add', () => {
    expect(new Cmp8273Component().add8273(1)).toBe(8274);
  });
});
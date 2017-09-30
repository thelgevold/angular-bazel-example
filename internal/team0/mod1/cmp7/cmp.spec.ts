
import { Cmp8017Component } from './cmp';
describe('Cmp8017Component', () => {
  it('should add', () => {
    expect(new Cmp8017Component().add8017(1)).toBe(8018);
  });
});
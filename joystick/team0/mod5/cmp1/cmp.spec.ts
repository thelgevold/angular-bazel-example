
import { Cmp9051Component } from './cmp';
describe('Cmp9051Component', () => {
  it('should add', () => {
    expect(new Cmp9051Component().add9051(1)).toBe(9052);
  });
});
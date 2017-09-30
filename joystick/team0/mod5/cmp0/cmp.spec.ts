
import { Cmp9050Component } from './cmp';
describe('Cmp9050Component', () => {
  it('should add', () => {
    expect(new Cmp9050Component().add9050(1)).toBe(9051);
  });
});
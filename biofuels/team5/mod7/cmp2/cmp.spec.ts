
import { Cmp1572Component } from './cmp';
describe('Cmp1572Component', () => {
  it('should add', () => {
    expect(new Cmp1572Component().add1572(1)).toBe(1573);
  });
});
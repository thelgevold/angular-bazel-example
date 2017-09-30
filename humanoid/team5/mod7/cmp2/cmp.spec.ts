
import { Cmp7572Component } from './cmp';
describe('Cmp7572Component', () => {
  it('should add', () => {
    expect(new Cmp7572Component().add7572(1)).toBe(7573);
  });
});
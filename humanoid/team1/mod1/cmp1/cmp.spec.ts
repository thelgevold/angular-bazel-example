
import { Cmp7111Component } from './cmp';
describe('Cmp7111Component', () => {
  it('should add', () => {
    expect(new Cmp7111Component().add7111(1)).toBe(7112);
  });
});
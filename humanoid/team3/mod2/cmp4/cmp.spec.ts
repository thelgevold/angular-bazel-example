
import { Cmp7324Component } from './cmp';
describe('Cmp7324Component', () => {
  it('should add', () => {
    expect(new Cmp7324Component().add7324(1)).toBe(7325);
  });
});

import { Cmp7309Component } from './cmp';
describe('Cmp7309Component', () => {
  it('should add', () => {
    expect(new Cmp7309Component().add7309(1)).toBe(7310);
  });
});

import { Cmp7744Component } from './cmp';
describe('Cmp7744Component', () => {
  it('should add', () => {
    expect(new Cmp7744Component().add7744(1)).toBe(7745);
  });
});
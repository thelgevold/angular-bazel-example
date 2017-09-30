
import { Cmp7432Component } from './cmp';
describe('Cmp7432Component', () => {
  it('should add', () => {
    expect(new Cmp7432Component().add7432(1)).toBe(7433);
  });
});

import { Cmp7221Component } from './cmp';
describe('Cmp7221Component', () => {
  it('should add', () => {
    expect(new Cmp7221Component().add7221(1)).toBe(7222);
  });
});
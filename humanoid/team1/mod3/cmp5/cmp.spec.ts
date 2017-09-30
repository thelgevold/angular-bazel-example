
import { Cmp7135Component } from './cmp';
describe('Cmp7135Component', () => {
  it('should add', () => {
    expect(new Cmp7135Component().add7135(1)).toBe(7136);
  });
});
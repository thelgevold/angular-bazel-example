
import { Cmp7657Component } from './cmp';
describe('Cmp7657Component', () => {
  it('should add', () => {
    expect(new Cmp7657Component().add7657(1)).toBe(7658);
  });
});
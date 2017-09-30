
import { Cmp7522Component } from './cmp';
describe('Cmp7522Component', () => {
  it('should add', () => {
    expect(new Cmp7522Component().add7522(1)).toBe(7523);
  });
});

import { Cmp7620Component } from './cmp';
describe('Cmp7620Component', () => {
  it('should add', () => {
    expect(new Cmp7620Component().add7620(1)).toBe(7621);
  });
});
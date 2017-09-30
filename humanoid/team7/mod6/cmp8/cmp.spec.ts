
import { Cmp7768Component } from './cmp';
describe('Cmp7768Component', () => {
  it('should add', () => {
    expect(new Cmp7768Component().add7768(1)).toBe(7769);
  });
});
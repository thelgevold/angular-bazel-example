
import { Cmp7292Component } from './cmp';
describe('Cmp7292Component', () => {
  it('should add', () => {
    expect(new Cmp7292Component().add7292(1)).toBe(7293);
  });
});

import { Cmp7345Component } from './cmp';
describe('Cmp7345Component', () => {
  it('should add', () => {
    expect(new Cmp7345Component().add7345(1)).toBe(7346);
  });
});
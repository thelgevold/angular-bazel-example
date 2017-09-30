
import { Cmp7749Component } from './cmp';
describe('Cmp7749Component', () => {
  it('should add', () => {
    expect(new Cmp7749Component().add7749(1)).toBe(7750);
  });
});
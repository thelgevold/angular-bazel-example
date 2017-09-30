
import { Cmp7575Component } from './cmp';
describe('Cmp7575Component', () => {
  it('should add', () => {
    expect(new Cmp7575Component().add7575(1)).toBe(7576);
  });
});
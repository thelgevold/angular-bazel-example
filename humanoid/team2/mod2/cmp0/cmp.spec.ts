
import { Cmp7220Component } from './cmp';
describe('Cmp7220Component', () => {
  it('should add', () => {
    expect(new Cmp7220Component().add7220(1)).toBe(7221);
  });
});

import { Cmp7027Component } from './cmp';
describe('Cmp7027Component', () => {
  it('should add', () => {
    expect(new Cmp7027Component().add7027(1)).toBe(7028);
  });
});
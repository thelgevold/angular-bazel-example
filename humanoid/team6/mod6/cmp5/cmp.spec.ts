
import { Cmp7665Component } from './cmp';
describe('Cmp7665Component', () => {
  it('should add', () => {
    expect(new Cmp7665Component().add7665(1)).toBe(7666);
  });
});
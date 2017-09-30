
import { Cmp7926Component } from './cmp';
describe('Cmp7926Component', () => {
  it('should add', () => {
    expect(new Cmp7926Component().add7926(1)).toBe(7927);
  });
});
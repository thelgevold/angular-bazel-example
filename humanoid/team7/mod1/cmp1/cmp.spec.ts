
import { Cmp7711Component } from './cmp';
describe('Cmp7711Component', () => {
  it('should add', () => {
    expect(new Cmp7711Component().add7711(1)).toBe(7712);
  });
});
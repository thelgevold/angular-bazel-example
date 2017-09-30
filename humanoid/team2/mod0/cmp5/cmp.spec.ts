
import { Cmp7205Component } from './cmp';
describe('Cmp7205Component', () => {
  it('should add', () => {
    expect(new Cmp7205Component().add7205(1)).toBe(7206);
  });
});

import { Cmp7028Component } from './cmp';
describe('Cmp7028Component', () => {
  it('should add', () => {
    expect(new Cmp7028Component().add7028(1)).toBe(7029);
  });
});

import { Cmp7801Component } from './cmp';
describe('Cmp7801Component', () => {
  it('should add', () => {
    expect(new Cmp7801Component().add7801(1)).toBe(7802);
  });
});
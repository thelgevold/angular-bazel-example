
import { Cmp7837Component } from './cmp';
describe('Cmp7837Component', () => {
  it('should add', () => {
    expect(new Cmp7837Component().add7837(1)).toBe(7838);
  });
});
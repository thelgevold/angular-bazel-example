
import { Cmp9837Component } from './cmp';
describe('Cmp9837Component', () => {
  it('should add', () => {
    expect(new Cmp9837Component().add9837(1)).toBe(9838);
  });
});

import { Cmp9964Component } from './cmp';
describe('Cmp9964Component', () => {
  it('should add', () => {
    expect(new Cmp9964Component().add9964(1)).toBe(9965);
  });
});
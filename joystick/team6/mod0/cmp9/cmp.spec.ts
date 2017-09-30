
import { Cmp9609Component } from './cmp';
describe('Cmp9609Component', () => {
  it('should add', () => {
    expect(new Cmp9609Component().add9609(1)).toBe(9610);
  });
});

import { Cmp9414Component } from './cmp';
describe('Cmp9414Component', () => {
  it('should add', () => {
    expect(new Cmp9414Component().add9414(1)).toBe(9415);
  });
});
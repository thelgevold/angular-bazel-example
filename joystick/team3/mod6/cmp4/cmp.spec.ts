
import { Cmp9364Component } from './cmp';
describe('Cmp9364Component', () => {
  it('should add', () => {
    expect(new Cmp9364Component().add9364(1)).toBe(9365);
  });
});

import { Cmp9750Component } from './cmp';
describe('Cmp9750Component', () => {
  it('should add', () => {
    expect(new Cmp9750Component().add9750(1)).toBe(9751);
  });
});

import { Cmp9789Component } from './cmp';
describe('Cmp9789Component', () => {
  it('should add', () => {
    expect(new Cmp9789Component().add9789(1)).toBe(9790);
  });
});
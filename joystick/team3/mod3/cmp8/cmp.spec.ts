
import { Cmp9338Component } from './cmp';
describe('Cmp9338Component', () => {
  it('should add', () => {
    expect(new Cmp9338Component().add9338(1)).toBe(9339);
  });
});
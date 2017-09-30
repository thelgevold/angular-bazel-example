
import { Cmp9213Component } from './cmp';
describe('Cmp9213Component', () => {
  it('should add', () => {
    expect(new Cmp9213Component().add9213(1)).toBe(9214);
  });
});
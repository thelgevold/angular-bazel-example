
import { Cmp9059Component } from './cmp';
describe('Cmp9059Component', () => {
  it('should add', () => {
    expect(new Cmp9059Component().add9059(1)).toBe(9060);
  });
});
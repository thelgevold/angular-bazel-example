
import { Cmp7383Component } from './cmp';
describe('Cmp7383Component', () => {
  it('should add', () => {
    expect(new Cmp7383Component().add7383(1)).toBe(7384);
  });
});
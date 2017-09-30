
import { Cmp9209Component } from './cmp';
describe('Cmp9209Component', () => {
  it('should add', () => {
    expect(new Cmp9209Component().add9209(1)).toBe(9210);
  });
});
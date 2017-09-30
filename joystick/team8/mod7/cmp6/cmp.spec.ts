
import { Cmp9876Component } from './cmp';
describe('Cmp9876Component', () => {
  it('should add', () => {
    expect(new Cmp9876Component().add9876(1)).toBe(9877);
  });
});
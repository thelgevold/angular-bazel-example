
import { Cmp2128Component } from './cmp';
describe('Cmp2128Component', () => {
  it('should add', () => {
    expect(new Cmp2128Component().add2128(1)).toBe(2129);
  });
});
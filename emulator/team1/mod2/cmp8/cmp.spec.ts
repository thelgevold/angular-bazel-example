
import { Cmp4128Component } from './cmp';
describe('Cmp4128Component', () => {
  it('should add', () => {
    expect(new Cmp4128Component().add4128(1)).toBe(4129);
  });
});
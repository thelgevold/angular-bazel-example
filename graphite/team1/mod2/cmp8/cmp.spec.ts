
import { Cmp6128Component } from './cmp';
describe('Cmp6128Component', () => {
  it('should add', () => {
    expect(new Cmp6128Component().add6128(1)).toBe(6129);
  });
});
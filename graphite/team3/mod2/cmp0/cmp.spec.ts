
import { Cmp6320Component } from './cmp';
describe('Cmp6320Component', () => {
  it('should add', () => {
    expect(new Cmp6320Component().add6320(1)).toBe(6321);
  });
});
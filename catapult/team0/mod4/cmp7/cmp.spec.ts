
import { Cmp2047Component } from './cmp';
describe('Cmp2047Component', () => {
  it('should add', () => {
    expect(new Cmp2047Component().add2047(1)).toBe(2048);
  });
});
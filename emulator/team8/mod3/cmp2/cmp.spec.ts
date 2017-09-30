
import { Cmp4832Component } from './cmp';
describe('Cmp4832Component', () => {
  it('should add', () => {
    expect(new Cmp4832Component().add4832(1)).toBe(4833);
  });
});
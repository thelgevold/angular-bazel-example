
import { Cmp4220Component } from './cmp';
describe('Cmp4220Component', () => {
  it('should add', () => {
    expect(new Cmp4220Component().add4220(1)).toBe(4221);
  });
});
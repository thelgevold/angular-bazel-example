
import { Cmp4963Component } from './cmp';
describe('Cmp4963Component', () => {
  it('should add', () => {
    expect(new Cmp4963Component().add4963(1)).toBe(4964);
  });
});

import { Cmp4123Component } from './cmp';
describe('Cmp4123Component', () => {
  it('should add', () => {
    expect(new Cmp4123Component().add4123(1)).toBe(4124);
  });
});
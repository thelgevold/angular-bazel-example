
import { Cmp4122Component } from './cmp';
describe('Cmp4122Component', () => {
  it('should add', () => {
    expect(new Cmp4122Component().add4122(1)).toBe(4123);
  });
});
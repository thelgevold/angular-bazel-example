
import { Cmp4574Component } from './cmp';
describe('Cmp4574Component', () => {
  it('should add', () => {
    expect(new Cmp4574Component().add4574(1)).toBe(4575);
  });
});
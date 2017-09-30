
import { Cmp4127Component } from './cmp';
describe('Cmp4127Component', () => {
  it('should add', () => {
    expect(new Cmp4127Component().add4127(1)).toBe(4128);
  });
});
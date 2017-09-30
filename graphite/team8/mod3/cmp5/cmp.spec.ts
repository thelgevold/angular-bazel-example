
import { Cmp6835Component } from './cmp';
describe('Cmp6835Component', () => {
  it('should add', () => {
    expect(new Cmp6835Component().add6835(1)).toBe(6836);
  });
});
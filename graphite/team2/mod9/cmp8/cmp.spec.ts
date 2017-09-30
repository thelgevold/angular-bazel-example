
import { Cmp6298Component } from './cmp';
describe('Cmp6298Component', () => {
  it('should add', () => {
    expect(new Cmp6298Component().add6298(1)).toBe(6299);
  });
});
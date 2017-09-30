
import { Cmp6242Component } from './cmp';
describe('Cmp6242Component', () => {
  it('should add', () => {
    expect(new Cmp6242Component().add6242(1)).toBe(6243);
  });
});
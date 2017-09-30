
import { Cmp6753Component } from './cmp';
describe('Cmp6753Component', () => {
  it('should add', () => {
    expect(new Cmp6753Component().add6753(1)).toBe(6754);
  });
});
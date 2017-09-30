
import { Cmp6618Component } from './cmp';
describe('Cmp6618Component', () => {
  it('should add', () => {
    expect(new Cmp6618Component().add6618(1)).toBe(6619);
  });
});
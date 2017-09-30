
import { Cmp6798Component } from './cmp';
describe('Cmp6798Component', () => {
  it('should add', () => {
    expect(new Cmp6798Component().add6798(1)).toBe(6799);
  });
});
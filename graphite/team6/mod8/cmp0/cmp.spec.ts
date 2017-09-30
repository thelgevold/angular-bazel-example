
import { Cmp6680Component } from './cmp';
describe('Cmp6680Component', () => {
  it('should add', () => {
    expect(new Cmp6680Component().add6680(1)).toBe(6681);
  });
});
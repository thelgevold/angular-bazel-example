
import { Cmp4680Component } from './cmp';
describe('Cmp4680Component', () => {
  it('should add', () => {
    expect(new Cmp4680Component().add4680(1)).toBe(4681);
  });
});
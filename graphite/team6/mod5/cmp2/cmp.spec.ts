
import { Cmp6652Component } from './cmp';
describe('Cmp6652Component', () => {
  it('should add', () => {
    expect(new Cmp6652Component().add6652(1)).toBe(6653);
  });
});
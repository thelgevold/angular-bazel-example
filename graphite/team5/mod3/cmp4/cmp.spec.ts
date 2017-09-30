
import { Cmp6534Component } from './cmp';
describe('Cmp6534Component', () => {
  it('should add', () => {
    expect(new Cmp6534Component().add6534(1)).toBe(6535);
  });
});
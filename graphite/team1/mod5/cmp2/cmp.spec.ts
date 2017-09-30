
import { Cmp6152Component } from './cmp';
describe('Cmp6152Component', () => {
  it('should add', () => {
    expect(new Cmp6152Component().add6152(1)).toBe(6153);
  });
});
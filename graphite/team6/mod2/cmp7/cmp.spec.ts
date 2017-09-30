
import { Cmp6627Component } from './cmp';
describe('Cmp6627Component', () => {
  it('should add', () => {
    expect(new Cmp6627Component().add6627(1)).toBe(6628);
  });
});
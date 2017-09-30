
import { Cmp6626Component } from './cmp';
describe('Cmp6626Component', () => {
  it('should add', () => {
    expect(new Cmp6626Component().add6626(1)).toBe(6627);
  });
});
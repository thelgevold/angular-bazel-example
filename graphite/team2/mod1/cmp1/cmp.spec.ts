
import { Cmp6211Component } from './cmp';
describe('Cmp6211Component', () => {
  it('should add', () => {
    expect(new Cmp6211Component().add6211(1)).toBe(6212);
  });
});
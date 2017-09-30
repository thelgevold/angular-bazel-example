
import { Cmp6291Component } from './cmp';
describe('Cmp6291Component', () => {
  it('should add', () => {
    expect(new Cmp6291Component().add6291(1)).toBe(6292);
  });
});
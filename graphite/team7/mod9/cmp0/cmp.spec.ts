
import { Cmp6790Component } from './cmp';
describe('Cmp6790Component', () => {
  it('should add', () => {
    expect(new Cmp6790Component().add6790(1)).toBe(6791);
  });
});
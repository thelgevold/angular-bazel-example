
import { Cmp6644Component } from './cmp';
describe('Cmp6644Component', () => {
  it('should add', () => {
    expect(new Cmp6644Component().add6644(1)).toBe(6645);
  });
});
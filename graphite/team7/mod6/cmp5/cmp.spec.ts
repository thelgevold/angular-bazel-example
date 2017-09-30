
import { Cmp6765Component } from './cmp';
describe('Cmp6765Component', () => {
  it('should add', () => {
    expect(new Cmp6765Component().add6765(1)).toBe(6766);
  });
});
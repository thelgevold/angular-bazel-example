
import { Cmp6050Component } from './cmp';
describe('Cmp6050Component', () => {
  it('should add', () => {
    expect(new Cmp6050Component().add6050(1)).toBe(6051);
  });
});
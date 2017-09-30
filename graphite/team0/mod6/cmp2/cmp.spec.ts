
import { Cmp6062Component } from './cmp';
describe('Cmp6062Component', () => {
  it('should add', () => {
    expect(new Cmp6062Component().add6062(1)).toBe(6063);
  });
});
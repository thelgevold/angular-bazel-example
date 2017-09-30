
import { Cmp6957Component } from './cmp';
describe('Cmp6957Component', () => {
  it('should add', () => {
    expect(new Cmp6957Component().add6957(1)).toBe(6958);
  });
});
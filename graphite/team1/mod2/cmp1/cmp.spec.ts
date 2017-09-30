
import { Cmp6121Component } from './cmp';
describe('Cmp6121Component', () => {
  it('should add', () => {
    expect(new Cmp6121Component().add6121(1)).toBe(6122);
  });
});
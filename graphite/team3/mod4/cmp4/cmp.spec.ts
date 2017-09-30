
import { Cmp6344Component } from './cmp';
describe('Cmp6344Component', () => {
  it('should add', () => {
    expect(new Cmp6344Component().add6344(1)).toBe(6345);
  });
});
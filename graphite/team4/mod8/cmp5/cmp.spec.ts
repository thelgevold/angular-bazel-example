
import { Cmp6485Component } from './cmp';
describe('Cmp6485Component', () => {
  it('should add', () => {
    expect(new Cmp6485Component().add6485(1)).toBe(6486);
  });
});
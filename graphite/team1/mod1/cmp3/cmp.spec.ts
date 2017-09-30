
import { Cmp6113Component } from './cmp';
describe('Cmp6113Component', () => {
  it('should add', () => {
    expect(new Cmp6113Component().add6113(1)).toBe(6114);
  });
});
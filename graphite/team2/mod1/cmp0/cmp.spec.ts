
import { Cmp6210Component } from './cmp';
describe('Cmp6210Component', () => {
  it('should add', () => {
    expect(new Cmp6210Component().add6210(1)).toBe(6211);
  });
});
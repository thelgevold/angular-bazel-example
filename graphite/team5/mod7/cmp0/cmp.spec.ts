
import { Cmp6570Component } from './cmp';
describe('Cmp6570Component', () => {
  it('should add', () => {
    expect(new Cmp6570Component().add6570(1)).toBe(6571);
  });
});
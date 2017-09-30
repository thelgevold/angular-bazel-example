
import { Cmp6785Component } from './cmp';
describe('Cmp6785Component', () => {
  it('should add', () => {
    expect(new Cmp6785Component().add6785(1)).toBe(6786);
  });
});
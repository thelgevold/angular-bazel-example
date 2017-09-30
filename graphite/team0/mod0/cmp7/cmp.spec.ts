
import { Cmp6007Component } from './cmp';
describe('Cmp6007Component', () => {
  it('should add', () => {
    expect(new Cmp6007Component().add6007(1)).toBe(6008);
  });
});
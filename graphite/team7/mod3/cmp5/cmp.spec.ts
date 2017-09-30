
import { Cmp6735Component } from './cmp';
describe('Cmp6735Component', () => {
  it('should add', () => {
    expect(new Cmp6735Component().add6735(1)).toBe(6736);
  });
});
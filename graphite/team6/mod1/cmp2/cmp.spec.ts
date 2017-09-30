
import { Cmp6612Component } from './cmp';
describe('Cmp6612Component', () => {
  it('should add', () => {
    expect(new Cmp6612Component().add6612(1)).toBe(6613);
  });
});